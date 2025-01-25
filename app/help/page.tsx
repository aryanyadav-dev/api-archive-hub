import Sidebar from '../components/Sidebar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HelpPage() {
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
        <h1 className="text-4xl font-bold mb-8 text-white">Help & Support</h1>
        <div className="grid gap-6">
          <Card className="bg-teal-900/20 backdrop-blur-sm border-teal-400/30">
            <CardHeader>
              <CardTitle className="text-white">Frequently Asked Questions</CardTitle>
              <CardDescription className="text-teal-200">Find answers to common questions</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-white">How do I get an API key?</AccordionTrigger>
                  <AccordionContent className="text-teal-200">
                    You can obtain an API key by registering for an account and navigating to the API Keys section in your dashboard.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-white">What are the rate limits for API calls?</AccordionTrigger>
                  <AccordionContent className="text-teal-200">
                    Rate limits vary depending on your subscription plan. Check your account settings for specific details.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-white">How do I report an issue with an API?</AccordionTrigger>
                  <AccordionContent className="text-teal-200">
                    You can report issues through our support ticket system or by emailing our support team at support@apihub.com.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-white">How do I reset my API key?</AccordionTrigger>
                  <AccordionContent className="text-teal-200">
                    To reset your API key, go to your account settings and select the "Reset API Key" option under the API Keys section.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-white">Can I use the API for commercial purposes?</AccordionTrigger>
                  <AccordionContent className="text-teal-200">
                    Yes, our API can be used for commercial purposes depending on your subscription plan. Please review our terms of service for more details.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-white">What are the supported programming languages for the API?</AccordionTrigger>
                  <AccordionContent className="text-teal-200">
                    Our API supports multiple programming languages including Python, JavaScript, Ruby, and PHP. You can find examples in our documentation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-white">How do I upgrade my subscription plan?</AccordionTrigger>
                  <AccordionContent className="text-teal-200">
                    You can upgrade your subscription plan by going to your account settings and selecting the "Upgrade Plan" option.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
