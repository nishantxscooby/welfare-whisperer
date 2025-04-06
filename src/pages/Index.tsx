
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, UserPlus } from 'lucide-react';
import SchemeForm, { FormState } from '@/components/SchemeForm';
import SchemeResult from '@/components/SchemeResult';

const Index = () => {
  const [userProfile, setUserProfile] = useState<FormState | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleFormSubmit = (formData: FormState) => {
    setUserProfile(formData);
    setShowResults(true);
    setShowForm(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setShowResults(false);
    setShowForm(false);
    setUserProfile(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const startSearch = () => {
    setShowForm(true);
    setShowResults(false);
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        {!showForm && !showResults ? (
          <div className="space-y-8">
            <div className="text-center mt-10 mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Discover Your Eligible
                <span className="text-primary block mt-2">Government Benefits</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                Find government welfare schemes tailored to your needs with our easy-to-use eligibility finder.
              </p>
              
              <Button 
                onClick={startSearch} 
                size="lg" 
                className="rounded-full px-8 py-6 text-lg font-medium group"
              >
                Start Your Search
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <FeatureCard 
                icon={<Search className="h-10 w-10 text-primary" />}
                title="Find Eligible Schemes"
                description="Answer a few questions about yourself to discover schemes you qualify for."
              />
              <FeatureCard 
                icon={<UserPlus className="h-10 w-10 text-primary" />}
                title="Personalized Results"
                description="Get results tailored to your personal situation and requirements."
              />
              <FeatureCard 
                icon={<ArrowRight className="h-10 w-10 text-primary" />}
                title="Easy Application"
                description="Get clear guidance on how to apply for each eligible scheme."
              />
            </div>
          </div>
        ) : showForm ? (
          <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Profile Information</h2>
              <Button variant="outline" onClick={handleReset}>Cancel</Button>
            </div>
            <Card className="border-border/30 shadow-md">
              <CardContent className="pt-6">
                <SchemeForm onSubmit={handleFormSubmit} />
              </CardContent>
            </Card>
          </div>
        ) : (
          userProfile && <SchemeResult userProfile={userProfile} onReset={handleReset} />
        )}
      </div>
    </Layout>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group border-border/30 animate-scale-in">
      <CardContent className="p-6">
        <div className="mb-4 p-3 rounded-full bg-primary/10 inline-block">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default Index;
