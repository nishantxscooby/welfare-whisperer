
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FormState } from './SchemeForm';
import { Scheme, filterSchemes } from '@/utils/schemeData';
import { ArrowLeft, Check, ExternalLink } from 'lucide-react';
import { Skeleton } from "@/components/ui/skeleton";

interface SchemeResultProps {
  userProfile: FormState;
  onReset: () => void;
}

const SchemeResult: React.FC<SchemeResultProps> = ({ userProfile, onReset }) => {
  const [loading, setLoading] = React.useState(true);
  const eligibleSchemes = filterSchemes(userProfile);
  
  React.useEffect(() => {
    // Simulate loading for a better UX
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold">Your Eligible Schemes</h2>
          <p className="text-muted-foreground mt-1">
            {loading ? (
              <Skeleton className="h-5 w-48" />
            ) : (
              `Found ${eligibleSchemes.length} scheme${eligibleSchemes.length !== 1 ? 's' : ''} based on your profile`
            )}
          </p>
        </div>
        <Button 
          variant="outline" 
          onClick={onReset} 
          className="mt-4 md:mt-0 flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Start New Search
        </Button>
      </div>
      
      {loading ? (
        <div className="grid grid-cols-1 gap-6">
          {[1, 2, 3].map((idx) => (
            <Card key={idx} className="overflow-hidden border-border/30">
              <CardHeader className="pb-2">
                <Skeleton className="h-7 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4" />
                
                <Separator className="my-4" />
                
                <div className="flex flex-wrap gap-2 mt-4">
                  <Skeleton className="h-6 w-20 rounded-full" />
                  <Skeleton className="h-6 w-24 rounded-full" />
                  <Skeleton className="h-6 w-16 rounded-full" />
                </div>
              </CardContent>
              <CardFooter>
                <Skeleton className="h-9 w-36" />
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : eligibleSchemes.length === 0 ? (
        <Card className="result-card animate-scale-in border-border/30">
          <CardHeader>
            <CardTitle>No Eligible Schemes Found</CardTitle>
            <CardDescription>
              Based on the information provided, we couldn't find any schemes that match your profile.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Try adjusting your profile details or check back later as new schemes are added regularly.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {eligibleSchemes.map((scheme, index) => (
            <SchemeCard key={scheme.id} scheme={scheme} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};

interface SchemeCardProps {
  scheme: Scheme;
  index: number;
}

const SchemeCard: React.FC<SchemeCardProps> = ({ scheme, index }) => {
  return (
    <Card 
      className="overflow-hidden hover:shadow-lg transition-all duration-300 group border-border/30" 
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardHeader className="pb-2 bg-primary/5 border-b border-border/30">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="group-hover:text-primary transition-colors">{scheme.name}</CardTitle>
            <CardDescription className="mt-1 text-foreground/70">{scheme.description}</CardDescription>
          </div>
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
            Government Scheme
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pt-4">
        <h4 className="font-medium text-sm mb-3 flex items-center">
          <Check className="h-4 w-4 text-primary mr-2" />
          Key Benefits
        </h4>
        <ul className="pl-6 mb-4 space-y-2">
          {scheme.benefits.map((benefit, idx) => (
            <li key={idx} className="text-sm text-muted-foreground list-disc">{benefit}</li>
          ))}
        </ul>
        
        <Separator className="my-4" />
        
        <div>
          <h4 className="font-medium text-sm mb-3 flex items-center">
            <Check className="h-4 w-4 text-primary mr-2" />
            Required Documents
          </h4>
          <div className="flex flex-wrap gap-2">
            {scheme.documentRequired.map((doc, idx) => (
              <Badge key={idx} variant="secondary" className="text-xs font-normal">
                {doc}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t">
        <p className="text-sm text-muted-foreground">
          <span className="font-medium">How to apply:</span> {scheme.applicationProcess}
        </p>
        {scheme.website && (
          <a href={scheme.website} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="text-xs flex items-center gap-1">
              Official Website
              <ExternalLink className="h-3 w-3 ml-1" />
            </Button>
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

export default SchemeResult;
