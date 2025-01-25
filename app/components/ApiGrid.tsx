'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from 'framer-motion' 

// Full API list segregated by category
const apiList = [
  // Editing
  { name: 'Cloudinary API', category: 'Editing', description: 'Manage, optimize, and deliver images and videos.' },
  { name: 'Adobe Creative SDK', category: 'Editing', description: 'Add creative tools and workflows to applications.' },
  { name: 'Figma API', category: 'Editing', description: 'Automate and extend design workflows.' },
  { name: 'Canva API', category: 'Editing', description: 'Integrate design capabilities into applications.' },

  // Data Analysis
  { name: 'Google Maps API', category: 'Data Analysis', description: 'Add maps and location data to your applications.' },
  { name: 'Tableau API', category: 'Data Analysis', description: 'Embed and control Tableau visualizations.' },
  { name: 'Elasticsearch API', category: 'Data Analysis', description: 'Search, analyze, and visualize data in real-time.' },
  { name: 'Power BI API', category: 'Data Analysis', description: 'Embed and integrate business intelligence reports.' },

  // Machine Learning
  { name: 'OpenAI API', category: 'Machine Learning', description: 'Access to powerful language models and more.' },
  { name: 'Hugging Face API', category: 'Machine Learning', description: 'Access to thousands of transformers models and datasets.' },
  { name: 'TensorFlow.js API', category: 'Machine Learning', description: 'Run ML models directly in the browser or Node.js.' },
  { name: 'Google Cloud AI API', category: 'Machine Learning', description: 'Suite of machine learning services and models.' },

  // Finance
  { name: 'Stripe API', category: 'Finance', description: 'Payment processing for internet businesses.' },
  { name: 'Plaid API', category: 'Finance', description: 'Connect with user bank accounts and financial data.' },
  { name: 'Square API', category: 'Finance', description: 'Payment processing and business management tools.' },
  { name: 'PayPal API', category: 'Finance', description: 'Online payment processing and transfers.' },

  // Communication
  { name: 'Twilio API', category: 'Communication', description: 'Add messaging, voice, and video to your applications.' },
  { name: 'SendGrid API', category: 'Communication', description: 'Email delivery and management service.' },
  { name: 'Slack API', category: 'Communication', description: 'Build integrations with Slack messaging platform.' },
  { name: 'Discord API', category: 'Communication', description: 'Build bots and integrate with Discord.' },

  // Coding
  { name: 'GitHub API', category: 'Coding', description: 'Build integrations with GitHub repositories and more.' },
  { name: 'GitLab API', category: 'Coding', description: 'Manage repositories and DevOps workflows.' },
  { name: 'Stack Exchange API', category: 'Coding', description: 'Access Stack Overflow and related communities.' },
  { name: 'Bitbucket API', category: 'Coding', description: 'Source code and CI/CD management.' },
]

// Popular APIs (Only the ones that are popular across all categories)
const popularApis = [
  { name: 'OpenAI API', category: 'Machine Learning', description: 'Access to powerful language models and more.' },
  { name: 'Stripe API', category: 'Finance', description: 'Payment processing for internet businesses.' },
  { name: 'GitHub API', category: 'Coding', description: 'Build integrations with GitHub repositories and more.' },
  { name: 'Twilio API', category: 'Communication', description: 'Add messaging, voice, and video to your applications.' },
  { name: 'Google Maps API', category: 'Data Analysis', description: 'Add maps and location data to your applications.' },
  { name: 'Cloudinary API', category: 'Editing', description: 'Manage, optimize, and deliver images and videos.' },
]

const categories = [
  'All', 'Editing', 'Coding', 'Data Analysis', 'Machine Learning', 'Finance', 'Communication'
]

const ApiCategoryList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Filter APIs based on the selected category
  const getApisByCategory = (category: string) => {
    if (category === 'All') {
      return popularApis
    }
    return apiList.filter(api => api.category === category)
  }

  return (
    <div className="space-y-6"> {/* Reduced space between sections */}
      {/* Category Bar (Tabs) */}
      <motion.div 
        className="mb-4" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-white">Categories</h2> {/* Added Categories header */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
          <TabsList className="w-full justify-start bg-teal-900/20 backdrop-blur-sm border border-teal-400/30">
            {categories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="text-teal-200 data-[state=active]:bg-teal-600/40 data-[state=active]:text-white"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </motion.div>

      {/* APIs based on selected category */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-4"> {/* Reduced margin here */}
          <h2 className="text-2xl font-semibold text-white">{selectedCategory} APIs</h2>
          <span className="text-sm text-teal-200">Most used APIs in the selected category</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getApisByCategory(selectedCategory).map((api) => (
            <motion.div 
              key={api.name}
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.3 }}
            >
              <Card 
                className="bg-teal-900/20 backdrop-blur-sm border-teal-400/30 hover:bg-teal-900/30 transition-all duration-200"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-white">{api.name}</CardTitle>
                      <CardDescription className="text-teal-200">{api.category}</CardDescription>
                    </div>
                    <span className="px-2 py-1 text-xs bg-teal-500/20 text-teal-200 rounded-full">Popular</span>
                  </div>
                </CardHeader>
                <CardDescription className="px-6 pb-6 text-teal-100">
                  {api.description}
                </CardDescription>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default ApiCategoryList
