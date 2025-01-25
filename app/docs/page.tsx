'use client'

import { motion } from 'framer-motion'
import Sidebar from '../components/Sidebar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function DocsPage() {
  return (
    <div 
      className="flex h-screen"
      style={{
        backgroundImage: 'url(/images/gradient-4.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Documentation
        </motion.h1>
        <div className="grid gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-teal-900/20 backdrop-blur-sm border-teal-400/30">
              <CardHeader>
                <CardTitle className="text-white">Getting Started</CardTitle>
                <CardDescription className="text-teal-200">Learn the basics of using our API Hub</CardDescription>
              </CardHeader>
              <CardContent className="text-teal-100">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-white">Creating an account</AccordionTrigger>
                    <AccordionContent className="text-teal-200">
                      To create an account, visit our signup page and provide your email address and a secure password. Verify your email to activate your account.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-white">Obtaining API keys</AccordionTrigger>
                    <AccordionContent className="text-teal-200">
                      Once logged in, navigate to the API Keys section in your dashboard. Generate a new API key and make sure to store it securely.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-white">Making your first API call</AccordionTrigger>
                    <AccordionContent className="text-teal-200">
                      Use the API Playground to test your first API call. Select an API, input your API key, and send a request to see the response.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-teal-900/20 backdrop-blur-sm border-teal-400/30">
              <CardHeader>
                <CardTitle className="text-white">API Reference</CardTitle>
                <CardDescription className="text-teal-200">Detailed information about our APIs</CardDescription>
              </CardHeader>
              <CardContent className="text-teal-100">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-white">Authentication</AccordionTrigger>
                    <AccordionContent className="text-teal-200">
                      All API requests require an API key to be included in the header: <code>Authorization: Bearer YOUR_API_KEY</code>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-white">Rate Limiting</AccordionTrigger>
                    <AccordionContent className="text-teal-200">
                      API calls are limited to 1000 requests per day by default. You can increase this limit by upgrading your plan.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-white">Error Handling</AccordionTrigger>
                    <AccordionContent className="text-teal-200">
                      Our APIs use standard HTTP response codes. 2xx for success, 4xx for client errors, and 5xx for server errors.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card className="bg-teal-900/20 backdrop-blur-sm border-teal-400/30">
              <CardHeader>
                <CardTitle className="text-white">Best Practices</CardTitle>
                <CardDescription className="text-teal-200">Optimize your API usage</CardDescription>
              </CardHeader>
              <CardContent className="text-teal-100">
                <ul className="list-disc list-inside space-y-2">
                  <li>Use appropriate caching strategies to reduce API calls</li>
                  <li>Implement proper error handling in your applications</li>
                  <li>Monitor your API usage to stay within rate limits</li>
                  <li>Keep your API keys secure and rotate them regularly</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
