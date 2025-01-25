'use client'

import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { motion } from 'framer-motion'

export default function SettingsPage() {
  const [apiKey, setApiKey] = useState('')
  const [defaultFormat, setDefaultFormat] = useState('JSON')
  const [usageLimit, setUsageLimit] = useState(1000)
  const [defaultVersion, setDefaultVersion] = useState('v1')
  const [webhookUrl, setWebhookUrl] = useState('')
  const [enableRateLimiting, setEnableRateLimiting] = useState(true)
  const [enableCaching, setEnableCaching] = useState(true)

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
        <h1 className="text-4xl font-bold mb-8 text-white">API Settings</h1>
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-teal-900/20 backdrop-blur-sm border-teal-400/30">
              <CardHeader>
                <CardTitle className="text-white">API Configuration</CardTitle>
                <CardDescription className="text-teal-200">Manage your API keys and default settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="api-key" className="text-white">API Key</Label>
                  <Input 
                    id="api-key" 
                    value={apiKey} 
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="Enter your API key"
                    className="bg-teal-900/30 border-teal-400/30 text-white placeholder-teal-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="default-format" className="text-white">Default Response Format</Label>
                  <Select value={defaultFormat} onValueChange={setDefaultFormat}>
                    <SelectTrigger id="default-format" className="bg-teal-900/30 border-teal-400/30 text-white">
                      <SelectValue placeholder="Select format" />
                    </SelectTrigger>
                    <SelectContent className="bg-teal-900 text-white">
                      <SelectItem value="JSON">JSON</SelectItem>
                      <SelectItem value="XML">XML</SelectItem>
                      <SelectItem value="YAML">YAML</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="default-version" className="text-white">Default API Version</Label>
                  <Select value={defaultVersion} onValueChange={setDefaultVersion}>
                    <SelectTrigger id="default-version" className="bg-teal-900/30 border-teal-400/30 text-white">
                      <SelectValue placeholder="Select API version" />
                    </SelectTrigger>
                    <SelectContent className="bg-teal-900 text-white">
                      <SelectItem value="v1">v1</SelectItem>
                      <SelectItem value="v2">v2</SelectItem>
                      <SelectItem value="v3">v3 (Beta)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-teal-900/20 backdrop-blur-sm border-teal-400/30">
              <CardHeader>
                <CardTitle className="text-white">Usage and Limits</CardTitle>
                <CardDescription className="text-teal-200">Configure API usage limits and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="usage-limit" className="text-white">API Usage Limit (calls per day)</Label>
                  <Slider
                    id="usage-limit"
                    min={100}
                    max={10000}
                    step={100}
                    value={[usageLimit]}
                    onValueChange={(value) => setUsageLimit(value[0])}
                    className="w-full"
                  />
                  <p className="text-teal-200 text-sm">{usageLimit} calls per day</p>
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="rate-limiting" className="text-white">Enable Rate Limiting</Label>
                  <Switch 
                    id="rate-limiting" 
                    checked={enableRateLimiting} 
                    onCheckedChange={setEnableRateLimiting}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="caching" className="text-white">Enable Response Caching</Label>
                  <Switch 
                    id="caching" 
                    checked={enableCaching} 
                    onCheckedChange={setEnableCaching}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-teal-900/20 backdrop-blur-sm border-teal-400/30">
              <CardHeader>
                <CardTitle className="text-white">Webhook Configuration</CardTitle>
                <CardDescription className="text-teal-200">Set up webhooks for real-time notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="webhook-url" className="text-white">Webhook URL</Label>
                  <Input 
                    id="webhook-url" 
                    value={webhookUrl} 
                    onChange={(e) => setWebhookUrl(e.target.value)}
                    placeholder="https://your-server.com/webhook"
                    className="bg-teal-900/30 border-teal-400/30 text-white placeholder-teal-300"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button className="w-1/5 mx-auto block bg-teal-600 hover:bg-teal-700 text-white">
              Save API Settings
            </Button>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
