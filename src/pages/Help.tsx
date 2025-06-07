import React from 'react';
import { useCreateContactQuery } from '@/hooks/useContactQueries';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { ContactForm } from '@/types';

const Help = () => {
  const { toast } = useToast();
  const createContactQuery = useCreateContactQuery();
  const [formData, setFormData] = React.useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await createContactQuery.mutateAsync(formData);
      toast({
        title: "Message Sent!",
        description: "Our team will get back to you shortly.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy-deep mb-4">Help & Support</h1>
          <p className="text-lg text-gray-600">We assist with inquiries related to our clothing manufacturing services</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* FAQ Section */}
          <div>
            <h2 className="text-2xl font-bold text-navy-deep mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What types of clothing do you manufacture?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We specialize in manufacturing a wide range of garments including t-shirts, hoodies, uniforms, sportswear, and custom branded apparel.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you accept bulk orders?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes, we cater to bulk manufacturing for brands, businesses, events, and institutions. Minimum order quantities may apply based on the product type.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I customize my clothing designs?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Absolutely! We offer complete customization including fabric selection, size grading, printing, embroidery, labels, tags, and packaging.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What is your production time?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our standard turnaround time ranges from 10 to 21 business days depending on the size and complexity of the order.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-navy-deep mb-6">Contact Us</h2>
            
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={createContactQuery.isPending}
                    className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-navy-deep"
                  >
                    {createContactQuery.isPending ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="mt-8 space-y-4">
              <div>
                <h3 className="font-semibold text-navy-deep">Email</h3>
                <p className="text-gray-600">support@clothingmanufacturer.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-navy-deep">Phone</h3>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
              <div>
                <h3 className="font-semibold text-navy-deep">Working Hours</h3>
                <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
