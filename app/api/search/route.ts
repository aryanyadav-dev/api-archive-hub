import { NextResponse } from 'next/server'
import { apis, API } from '@/app/lib/api-data'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')
  const id = searchParams.get('id')
  const category = searchParams.get('category')

  if (id) {
    const api = apis.find(api => api.id === id)
    return api 
      ? NextResponse.json(api)
      : NextResponse.json({ error: 'API not found' }, { status: 404 })
  }

  let filteredApis = apis

  if (query) {
    filteredApis = filteredApis.filter(api => 
      api.name.toLowerCase().includes(query.toLowerCase()) ||
      api.description.toLowerCase().includes(query.toLowerCase())
    )
  }

  if (category && category !== 'All') {
    filteredApis = filteredApis.filter(api => api.category === category)
  }

  return NextResponse.json(filteredApis)
}

