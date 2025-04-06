
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

interface SchemeFormProps {
  onSubmit: (formData: FormState) => void;
}

export interface FormState {
  age: number;
  gender: string;
  maritalStatus: string;
  disability: boolean;
  caste: string;
  income: number;
  occupation: string;
  bplStatus: boolean;
  state: string;
  area: string;
  education: string;
}

const initialState: FormState = {
  age: 30,
  gender: "Male",
  maritalStatus: "Single",
  disability: false,
  caste: "General",
  income: 0,
  occupation: "Salaried",
  bplStatus: false,
  state: "Maharashtra",
  area: "Urban",
  education: "Graduate"
};

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
  "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const casteCategories = ["General", "SC", "ST", "OBC", "Other"];
const occupations = ["Salaried", "Self-employed", "Farmer", "Unorganized Sector Worker", "Student", "Unemployed", "Entrepreneur", "Small Business Owner", "Other"];
const educationLevels = ["Illiterate", "Primary", "Secondary", "Higher Secondary", "Graduate", "Post Graduate", "Doctorate"];

const SchemeForm: React.FC<SchemeFormProps> = ({ onSubmit }) => {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof FormState, value: any) => {
    setFormState(prev => ({ ...prev, [field]: value }));
  };

  const handleNumberChange = (field: keyof FormState, value: string) => {
    const numValue = value === '' ? 0 : Number(value);
    if (!isNaN(numValue)) {
      setFormState(prev => ({ ...prev, [field]: numValue }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate loading
    setTimeout(() => {
      onSubmit(formState);
      setIsSubmitting(false);
      toast.success("Profile details submitted successfully!");
    }, 800);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container animate-fade-in">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Personal Details</h2>
        <p className="text-muted-foreground">Enter your details to find eligible government schemes</p>
      </div>
      
      <Separator className="my-6" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Age */}
        <div className="form-field stagger-item">
          <Label htmlFor="age">Age</Label>
          <Input
            id="age"
            type="number"
            min="0"
            max="120"
            value={formState.age}
            onChange={(e) => handleNumberChange('age', e.target.value)}
            className="mt-1 input-focus-ring"
          />
        </div>
        
        {/* Gender */}
        <div className="form-field stagger-item">
          <Label htmlFor="gender">Gender</Label>
          <Select value={formState.gender} onValueChange={(value) => handleChange('gender', value)}>
            <SelectTrigger className="mt-1 input-focus-ring">
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Male">Male</SelectItem>
              <SelectItem value="Female">Female</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Marital Status */}
        <div className="form-field stagger-item">
          <Label htmlFor="maritalStatus">Marital Status</Label>
          <Select value={formState.maritalStatus} onValueChange={(value) => handleChange('maritalStatus', value)}>
            <SelectTrigger className="mt-1 input-focus-ring">
              <SelectValue placeholder="Select marital status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Single">Single</SelectItem>
              <SelectItem value="Married">Married</SelectItem>
              <SelectItem value="Divorced">Divorced</SelectItem>
              <SelectItem value="Widowed">Widowed</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Disability Status */}
        <div className="form-field stagger-item">
          <div className="flex items-center justify-between">
            <Label htmlFor="disability">Person with Disability</Label>
            <Switch
              id="disability"
              checked={formState.disability}
              onCheckedChange={(checked) => handleChange('disability', checked)}
            />
          </div>
        </div>
        
        {/* Caste/Category */}
        <div className="form-field stagger-item">
          <Label htmlFor="caste">Caste/Category</Label>
          <Select value={formState.caste} onValueChange={(value) => handleChange('caste', value)}>
            <SelectTrigger className="mt-1 input-focus-ring">
              <SelectValue placeholder="Select caste/category" />
            </SelectTrigger>
            <SelectContent>
              {casteCategories.map((caste) => (
                <SelectItem key={caste} value={caste}>{caste}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {/* Annual Income */}
        <div className="form-field stagger-item">
          <Label htmlFor="income">Annual Income (₹)</Label>
          <Input
            id="income"
            type="number"
            min="0"
            value={formState.income}
            onChange={(e) => handleNumberChange('income', e.target.value)}
            className="mt-1 input-focus-ring"
          />
        </div>
        
        {/* Occupation */}
        <div className="form-field stagger-item">
          <Label htmlFor="occupation">Occupation</Label>
          <Select value={formState.occupation} onValueChange={(value) => handleChange('occupation', value)}>
            <SelectTrigger className="mt-1 input-focus-ring">
              <SelectValue placeholder="Select occupation" />
            </SelectTrigger>
            <SelectContent>
              {occupations.map((occupation) => (
                <SelectItem key={occupation} value={occupation}>{occupation}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {/* BPL Status */}
        <div className="form-field stagger-item">
          <div className="flex items-center justify-between">
            <Label htmlFor="bplStatus">Below Poverty Line (BPL)</Label>
            <Switch
              id="bplStatus"
              checked={formState.bplStatus}
              onCheckedChange={(checked) => handleChange('bplStatus', checked)}
            />
          </div>
        </div>
        
        {/* State */}
        <div className="form-field stagger-item">
          <Label htmlFor="state">State</Label>
          <Select value={formState.state} onValueChange={(value) => handleChange('state', value)}>
            <SelectTrigger className="mt-1 input-focus-ring">
              <SelectValue placeholder="Select state" />
            </SelectTrigger>
            <SelectContent>
              {indianStates.map((state) => (
                <SelectItem key={state} value={state}>{state}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {/* Area */}
        <div className="form-field stagger-item">
          <Label htmlFor="area">Area</Label>
          <Select value={formState.area} onValueChange={(value) => handleChange('area', value)}>
            <SelectTrigger className="mt-1 input-focus-ring">
              <SelectValue placeholder="Select area" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Urban">Urban</SelectItem>
              <SelectItem value="Rural">Rural</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Education Level */}
        <div className="form-field stagger-item">
          <Label htmlFor="education">Education Level</Label>
          <Select value={formState.education} onValueChange={(value) => handleChange('education', value)}>
            <SelectTrigger className="mt-1 input-focus-ring">
              <SelectValue placeholder="Select education level" />
            </SelectTrigger>
            <SelectContent>
              {educationLevels.map((level) => (
                <SelectItem key={level} value={level}>{level}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="mt-8 flex justify-center">
        <Button type="submit" className="btn-primary w-full md:w-auto min-w-[200px]" disabled={isSubmitting}>
          {isSubmitting ? "Finding Schemes..." : "Find Eligible Schemes"}
        </Button>
      </div>
    </form>
  );
};

export default SchemeForm;
