import { useEffect, useRef, useState } from "react";
import ChatbotIcon from "./chatComponents/ChatbotIcon";
import ChatForm from "./chatComponents/ChatForm";
import ChatMessage from "./chatComponents/ChatMessage";
import { companyInfo } from "./chatComponents/MzansiMarketInfo";
import { FaTimes } from "react-icons/fa";

export const ChatOverlay = () => {
  const chatBodyRef = useRef();
  const [showChatbot, setShowChatbot] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    {
      hideInChat: true,
      role: "model",
      text: companyInfo,
    },
  ]);

  // Get API URL from environment variables or use default
  const API_URL =
    import.meta.env.VITE_API_URL || "http://localhost:8000/api/chat";

  const generateBotResponse = async (history) => {
    console.log("🔍 generateBotResponse called with:", history);

    setIsLoading(true);

    // Helper function to update chat history
    const updateHistory = (text, isError = false) => {
      console.log("📝 Updating history with text:", typeof text, text);
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text: String(text), isError }, // Ensure text is always a string
      ]);
      setIsLoading(false);
    };

    try {
      // Validate input history
      if (!Array.isArray(history)) {
        throw new Error("History must be an array");
      }

      // Format chat history for API request (matching Gemini's expected format)
      const formattedHistory = history.map(({ role, text }, index) => {
        console.log(`📋 Formatting message ${index}:`, {
          role,
          text: typeof text,
          textContent: text,
        });

        if (!role || !text) {
          throw new Error(
            `Invalid message at index ${index}: missing role or text`
          );
        }

        return {
          role: role === "model" ? "model" : "user",
          parts: [{ text: String(text) }], // Ensure text is always a string
        };
      });

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ contents: formattedHistory }),
      };

      console.log("🚀 Sending request to:", API_URL);
      console.log("📤 Request payload structure:", {
        contentsCount: formattedHistory.length,
        messageTypes: formattedHistory.map((msg) => ({
          role: msg.role,
          hasText: !!msg.parts[0].text,
        })),
      });

      // Make the API call to your backend
      const response = await fetch(API_URL, requestOptions);

      console.log("📡 Response status:", response.status);
      console.log("📡 Response ok:", response.ok);

      if (!response.ok) {
        let errorMessage = `HTTP error! status: ${response.status}`;
        try {
          const errorData = await response.json();
          console.log("❌ Error response data:", errorData);
          errorMessage = errorData?.error || errorData?.message || errorMessage;
        } catch (jsonError) {
          console.error("❌ Error parsing error response:", jsonError);
          // Try to get response as text
          try {
            const textResponse = await response.text();
            console.log("📄 Error response as text:", textResponse);
            errorMessage = textResponse || errorMessage;
          } catch (textError) {
            console.error("❌ Error getting text response:", textError);
          }
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();
      console.log("✅ Received response:", data);
      console.log("🔍 Response type:", typeof data);
      console.log("🔍 Response structure:", Object.keys(data));

      // Check if the response has the expected structure
      if (!data || typeof data !== "object") {
        throw new Error("Response is not an object");
      }

      if (!data.candidates) {
        console.log("❌ No candidates in response");
        throw new Error("No candidates in API response");
      }

      if (!Array.isArray(data.candidates) || data.candidates.length === 0) {
        console.log("❌ Invalid candidates array");
        throw new Error("Invalid candidates array in API response");
      }

      if (!data.candidates[0]) {
        console.log("❌ No first candidate");
        throw new Error("No first candidate in API response");
      }

      if (!data.candidates[0].content) {
        console.log("❌ No content in first candidate");
        throw new Error("No content in first candidate");
      }

      if (!data.candidates[0].content.parts) {
        console.log("❌ No parts in content");
        throw new Error("No parts in content");
      }

      if (
        !Array.isArray(data.candidates[0].content.parts) ||
        data.candidates[0].content.parts.length === 0
      ) {
        console.log("❌ Invalid parts array");
        throw new Error("Invalid parts array in content");
      }

      if (!data.candidates[0].content.parts[0]) {
        console.log("❌ No first part");
        throw new Error("No first part in content");
      }

      const rawText = data.candidates[0].content.parts[0].text;
      console.log("📝 Raw response text:", typeof rawText, rawText);

      if (typeof rawText !== "string") {
        throw new Error("Response text is not a string");
      }

      // Clean and update chat history with bot's response
      const apiResponseText = rawText
        .replace(/\*\*(.*?)\*\*/g, "$1") // Remove markdown bold formatting
        .trim();

      console.log("✨ Cleaned response text:", apiResponseText);
      updateHistory(apiResponseText);
    } catch (error) {
      console.error("💥 Error in generateBotResponse:", error);
      console.error("💥 Error type:", typeof error);
      console.error("💥 Error constructor:", error.constructor.name);
      console.error("💥 Error message:", error.message);
      console.error("💥 Full error object:", error);

      // Safely extract error message
      let errorMessage = "An unexpected error occurred. Please try again.";

      if (error instanceof Error && error.message) {
        errorMessage = error.message;
      } else if (typeof error === "string") {
        errorMessage = error;
      } else if (error && typeof error === "object") {
        // Handle cases where error might be an object
        if (error.message) {
          errorMessage = error.message;
        } else if (error.error) {
          errorMessage = error.error;
        } else {
          errorMessage = `Error object: ${Object.keys(error).join(", ")}`;
        }
      }

      console.log("📝 Final error message:", errorMessage);

      // Update chat history with the error message
      updateHistory(`Sorry, I encountered an error: ${errorMessage}`, true);
    }
  };

  useEffect(() => {
    // Auto-scroll whenever chat history updates
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatHistory]);

  return (
    <div className={`container ${showChatbot ? "show-chatbot" : ""}`}>
      <button
        onClick={() => setShowChatbot((prev) => !prev)}
        id="chatbot-toggler"
        aria-label="Toggle chatbot"
      >
        <span className="material-symbols-rounded">mode_comment</span>
        <span className="material-symbols-rounded">close</span>
      </button>

      <div className="chatbot-popup">
        {/* Chatbot Header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">MzansiMarket Assistant</h2>
          </div>
          <button
            onClick={() => setShowChatbot((prev) => !prev)}
            className="material-symbols-rounded"
            aria-label="Close chatbot"
          >
            keyboard_arrow_down
          </button>
        </div>

        {/* Chatbot Body */}
        <div ref={chatBodyRef} className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Hey 👋 <br />
              Welcome to MzansiMarket!
              <br /> How can I help today?
            </p>
          </div>

          {/* Render the chat history dynamically */}
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>

        {/* Chatbot Footer */}
        <div className="chat-footer">
          <ChatForm
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatOverlay;
