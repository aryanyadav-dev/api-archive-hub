'use client'

import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from 'framer-motion'  // Import Framer Motion

export default function PlaygroundPage() {
  const [method, setMethod] = useState('GET')
  const [url, setUrl] = useState('')
  const [headers, setHeaders] = useState('')
  const [body, setBody] = useState('')
  const [params, setParams] = useState('')
  const [response, setResponse] = useState('')
  const [activeTab, setActiveTab] = useState('params')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const headerObj = headers.split('\n').reduce((acc, line) => {
        const [key, value] = line.split(':')
        if (key && value) {
          acc[key.trim()] = value.trim()
        }
        return acc
      }, {} as Record<string, string>)

      const paramObj = params.split('\n').reduce((acc, line) => {
        const [key, value] = line.split('=')
        if (key && value) {
          acc[key.trim()] = value.trim()
        }
        return acc
      }, {} as Record<string, string>)

      const urlWithParams = new URL(url)
      Object.keys(paramObj).forEach(key => urlWithParams.searchParams.append(key, paramObj[key]))

      const res = await fetch(urlWithParams.toString(), {
        method,
        headers: headerObj,
        body: method !== 'GET' && method !== 'HEAD' ? body : undefined
      })

      const data = await res.text()
      setResponse(data)
    } catch (error) {
      setResponse(`Error: ${error}`)
    }
  }

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
          API Playground
        </motion.h1>
        <div className="grid gap-6">
          <motion.div 
            className="bg-teal-900/20 backdrop-blur-sm border-teal-400/30"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            <CardHeader>
              <CardTitle className="text-white">Make an API Request</CardTitle>
              <CardDescription className="text-teal-200">Test your API calls here</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-4">
                  <Select value={method} onValueChange={setMethod}>
                    <SelectTrigger className="w-[180px] bg-teal-900/30 border-teal-400/30 text-white">
                      <SelectValue placeholder="Select method" />
                    </SelectTrigger>
                    <SelectContent className="bg-teal-900 text-white">
                      <SelectItem value="GET">GET</SelectItem>
                      <SelectItem value="POST">POST</SelectItem>
                      <SelectItem value="PUT">PUT</SelectItem>
                      <SelectItem value="DELETE">DELETE</SelectItem>
                      <SelectItem value="PATCH">PATCH</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    type="text"
                    placeholder="Enter API URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="flex-grow bg-teal-900/30 border-teal-400/30 text-white placeholder-teal-300"
                  />
                </div>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="bg-teal-900/30 border-teal-400/30">
                    <TabsTrigger value="params" className="text-white data-[state=active]:bg-teal-600">Params</TabsTrigger>
                    <TabsTrigger value="headers" className="text-white data-[state=active]:bg-teal-600">Headers</TabsTrigger>
                    <TabsTrigger value="body" className="text-white data-[state=active]:bg-teal-600">Body</TabsTrigger>
                  </TabsList>
                  <TabsContent value="params">
                    <Textarea
                      placeholder="key=value (one per line)"
                      value={params}
                      onChange={(e) => setParams(e.target.value)}
                      className="h-32 bg-teal-900/30 border-teal-400/30 text-white placeholder-teal-300"
                    />
                  </TabsContent>
                  <TabsContent value="headers">
                    <Textarea
                      placeholder="key: value (one per line)"
                      value={headers}
                      onChange={(e) => setHeaders(e.target.value)}
                      className="h-32 bg-teal-900/30 border-teal-400/30 text-white placeholder-teal-300"
                    />
                  </TabsContent>
                  <TabsContent value="body">
                    <Textarea
                      placeholder="Request Body (JSON format)"
                      value={body}
                      onChange={(e) => setBody(e.target.value)}
                      className="h-32 bg-teal-900/30 border-teal-400/30 text-white placeholder-teal-300"
                    />
                  </TabsContent>
                </Tabs>
                <div className="flex justify-center">
                  <Button 
                    type="submit" 
                    className="w-1/5 bg-teal-600 hover:bg-teal-700 text-white"
                  >
                    Send Request
                  </Button>
                </div>
              </form>
            </CardContent>
          </motion.div>
          <motion.div 
            className="bg-teal-900/20 backdrop-blur-sm border-teal-400/30"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            <CardHeader>
              <CardTitle className="text-white">Response</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={response}
                readOnly
                className="h-64 bg-teal-900/30 border-teal-400/30 text-white"
              />
            </CardContent>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
