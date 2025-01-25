'use client'

import { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { API } from '../lib/api-data'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from 'framer-motion'

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('All')
  const [apis, setApis] = useState<API[]>([])
  const [selectedApi, setSelectedApi] = useState<API | null>(null)

  useEffect(() => {
    fetchApis()
  }, [searchQuery, categoryFilter])

  const fetchApis = async () => {
    const res = await fetch(`/api/search?q=${searchQuery}`)
    const data = await res.json()
    setApis(data.filter((api: API) => categoryFilter === 'All' || api.category === categoryFilter))
  }

  const fetchApiDetails = async (id: string) => {
    const res = await fetch(`/api/search?id=${id}`)
    const data = await res.json()
    setSelectedApi(data)
  }

  const categories = ['All', ...new Set(apis.map(api => api.category))]

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
          Search APIs
        </motion.h1>
        <div className="mb-6 flex gap-4">
          <Input
            type="text"
            placeholder="Search for APIs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-teal-900/30 border-teal-400/30 text-white placeholder-teal-300"
          />
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-[180px] bg-teal-900/30 border-teal-400/30 text-white">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent className="bg-teal-900 text-white">
              {categories.map((category) => (
                <SelectItem key={category} value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button className="bg-teal-600 hover:bg-teal-700 text-white" onClick={fetchApis}>
            Search
          </Button>
        </div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {apis.map((api) => (
            <motion.div 
              key={api.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-teal-900/20 backdrop-blur-sm border-teal-400/30 flex flex-col">
                <CardHeader>
                  <CardTitle className="text-white">{api.name}</CardTitle>
                  <CardDescription className="text-teal-200">{api.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <p className="text-sm text-teal-300 mb-4">Category: {api.category}</p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className="w-2/3 mx-auto block bg-teal-600 hover:bg-teal-700 text-white"
                        onClick={() => fetchApiDetails(api.id)}
                      >
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-teal-900/90 text-white">
                      <DialogHeader>
                        <DialogTitle>{selectedApi?.name}</DialogTitle>
                        <DialogDescription className="text-teal-200">
                          {selectedApi?.description}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-4">
                        <p><strong>Category:</strong> {selectedApi?.category}</p>
                        <p><strong>API Link:</strong> <a href={selectedApi?.apiLink} target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:underline">{selectedApi?.apiLink}</a></p>
                        <p><strong>Documentation:</strong> <a href={selectedApi?.documentation} target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:underline">{selectedApi?.documentation}</a></p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  )
}
