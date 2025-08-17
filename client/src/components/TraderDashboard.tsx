
import React, { useState } from 'react';
import { Plus, Edit, Trash2, BarChart3, Package, Users, DollarSign, TrendingUp } from 'lucide-react';

interface TraderDashboardProps {
  currentLanguage: string;
}

export const TraderDashboard: React.FC<TraderDashboardProps> = ({ currentLanguage }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const getDashboardText = (key: string) => {
    const translations = {
      en: {
        title: 'Trader Dashboard',
        overview: 'Overview',
        products: 'Products',
        orders: 'Orders',
        analytics: 'Analytics',
        settings: 'Settings',
        addProduct: 'Add New Product',
        totalSales: 'Total Sales',
        totalOrders: 'Total Orders',
        totalProducts: 'Total Products',
        totalCustomers: 'Total Customers',
        recentOrders: 'Recent Orders',
        productName: 'Product Name',
        price: 'Price',
        stock: 'Stock',
        status: 'Status',
        actions: 'Actions',
        edit: 'Edit',
        delete: 'Delete',
        active: 'Active',
        outOfStock: 'Out of Stock'
      },
      af: {
        title: 'Handelaar Bedienpaneel',
        overview: 'Oorsig',
        products: 'Produkte',
        orders: 'Bestellings',
        analytics: 'Analise',
        settings: 'Instellings',
        addProduct: 'Voeg Nuwe Produk By',
        totalSales: 'Totale Verkope',
        totalOrders: 'Totale Bestellings',
        totalProducts: 'Totale Produkte',
        totalCustomers: 'Totale Kliënte',
        recentOrders: 'Onlangse Bestellings',
        productName: 'Produk Naam',
        price: 'Prys',
        stock: 'Voorraad',
        status: 'Status',
        actions: 'Aksies',
        edit: 'Redigeer',
        delete: 'Verwyder',
        active: 'Aktief',
        outOfStock: 'Uit Voorraad'
      },
      zu: {
        title: 'I-dashboard Yomthengisi',
        overview: 'Ukubuka Konke',
        products: 'Imikhiqizo',
        orders: 'Ama-oda',
        analytics: 'Ukuhlaziya',
        settings: 'Izilungiselelo',
        addProduct: 'Engeza Umkhiqizo Omusha',
        totalSales: 'Ukuthengisa Okuphelele',
        totalOrders: 'Ama-oda Aphelele',
        totalProducts: 'Imikhiqizo Ephelele',
        totalCustomers: 'Amakhasimende Aphelele',
        recentOrders: 'Ama-oda Akamuva',
        productName: 'Igama Lomkhiqizo',
        price: 'Intengo',
        stock: 'Isitoko',
        status: 'Isimo',
        actions: 'Izenzo',
        edit: 'Hlela',
        delete: 'Susa',
        active: 'Uyasebenza',
        outOfStock: 'Akusekho Esitokini'
      }
    };
    return translations[currentLanguage as keyof typeof translations][key as keyof typeof translations.en];
  };

  const stats = {
    totalSales: 12450,
    totalOrders: 156,
    totalProducts: 23,
    totalCustomers: 89
  };

  const products = [
    {
      id: 1,
      name: 'Fresh Spinach Bundle',
      price: 25,
      stock: 15,
      status: 'active',
      image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 2,
      name: 'Traditional Spice Mix',
      price: 45,
      stock: 0,
      status: 'out_of_stock',
      image: 'https://images.pexels.com/photos/1342191/pexels-photo-1342191.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 3,
      name: 'Organic Tomatoes',
      price: 30,
      stock: 8,
      status: 'active',
      image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  const recentOrders = [
    { id: '#001', customer: 'Sarah M.', amount: 75, status: 'completed', date: '2024-01-15' },
    { id: '#002', customer: 'John D.', amount: 120, status: 'pending', date: '2024-01-15' },
    { id: '#003', customer: 'Mary K.', amount: 45, status: 'shipped', date: '2024-01-14' }
  ];

  const tabs = [
    { id: 'overview', label: getDashboardText('overview'), icon: BarChart3 },
    { id: 'products', label: getDashboardText('products'), icon: Package },
    { id: 'orders', label: getDashboardText('orders'), icon: Users },
    { id: 'analytics', label: getDashboardText('analytics'), icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">{getDashboardText('title')}</h1>
          <p className="text-gray-600">Welcome back, Nomsa! Here's your business overview.</p>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{getDashboardText('totalSales')}</p>
                    <p className="text-3xl font-bold text-slate-900">R{stats.totalSales.toLocaleString()}</p>
                  </div>
                  <DollarSign className="w-8 h-8 text-green-500" />
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{getDashboardText('totalOrders')}</p>
                    <p className="text-3xl font-bold text-slate-900">{stats.totalOrders}</p>
                  </div>
                  <Package className="w-8 h-8 text-blue-500" />
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{getDashboardText('totalProducts')}</p>
                    <p className="text-3xl font-bold text-slate-900">{stats.totalProducts}</p>
                  </div>
                  <BarChart3 className="w-8 h-8 text-orange-500" />
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{getDashboardText('totalCustomers')}</p>
                    <p className="text-3xl font-bold text-slate-900">{stats.totalCustomers}</p>
                  </div>
                  <Users className="w-8 h-8 text-purple-500" />
                </div>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-slate-900">{getDashboardText('recentOrders')}</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentOrders.map(order => (
                      <tr key={order.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-slate-900">{order.id}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{order.customer}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">R{order.amount}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            order.status === 'completed' ? 'bg-green-100 text-green-800' :
                            order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">{order.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-900">{getDashboardText('products')}</h2>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium flex items-center">
                <Plus className="w-5 h-5 mr-2" />
                {getDashboardText('addProduct')}
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">{getDashboardText('productName')}</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">{getDashboardText('price')}</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">{getDashboardText('stock')}</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">{getDashboardText('status')}</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">{getDashboardText('actions')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {products.map(product => (
                      <tr key={product.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <img src={product.image} alt={product.name} className="w-10 h-10 rounded-lg object-cover mr-3" />
                            <span className="text-sm font-medium text-slate-900">{product.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">R{product.price}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{product.stock}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            product.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {product.status === 'active' ? getDashboardText('active') : getDashboardText('outOfStock')}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <button className="text-blue-500 hover:text-blue-700">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="text-red-500 hover:text-red-700">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Other tabs would have similar content structure */}
        {activeTab === 'orders' && (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Orders Management</h3>
            <p className="text-gray-600">Detailed order management interface would be implemented here.</p>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <TrendingUp className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Analytics & Reports</h3>
            <p className="text-gray-600">Detailed analytics and reporting interface would be implemented here.</p>
          </div>
        )}
      </div>
    </div>
  );
};
