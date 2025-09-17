"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Progress } from "~/components/ui/progress";
import {
  ChevronLeft,
  ChevronRight,
  User,
  GraduationCap,
  Users,
} from "lucide-react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: "male" | "female" | "";
  matricNo: string;
  department: string;
  guardianName: string;
  hostel: string;
  guardianPhoneNumber: string;
  level: string;
  // photoUrl: string // Commented out for later implementation
};

const hostels = [
  "Moremi Hall",
  "Ife Hall",
  "Fajuyi Hall",
  "Angola Hall",
  "Mozambique Hall",
  "ETF Hall",
  "Awolowo Hall",
  "Awo Hall",
  "New Hall",
  "Postgraduate Hall",
];

const departments = [
  "Computer Science",
  "Electrical Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
  "Medicine",
  "Law",
  "Economics",
  "Psychology",
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
];

const levels = ["100", "200", "300", "400", "500", "600"];

export default function OnboardingForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "John", // Pre-filled
    lastName: "Doe", // Pre-filled
    email: "john.doe@student.edu", // Pre-filled
    phoneNumber: "",
    gender: "",
    matricNo: "",
    department: "",
    guardianName: "",
    hostel: "",
    guardianPhoneNumber: "",
    level: "",
    // photoUrl: '' // Commented out
  });

  const totalSteps = 3;
  const progress = (currentStep / totalSteps) * 100;

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <User className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-balance">
                Personal Information
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  placeholder="Enter your first name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Enter your email address"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    handleInputChange("phoneNumber", e.target.value)
                  }
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select
                  value={formData.gender}
                  onValueChange={(value) => handleInputChange("gender", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-balance">
                Academic Information
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="matricNo">Matric Number</Label>
                <Input
                  id="matricNo"
                  value={formData.matricNo}
                  onChange={(e) =>
                    handleInputChange("matricNo", e.target.value)
                  }
                  placeholder="Enter your matric number"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="level">Level</Label>
                <Select
                  value={formData.level}
                  onValueChange={(value) => handleInputChange("level", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your level" />
                  </SelectTrigger>
                  <SelectContent>
                    {levels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level} Level
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Select
                value={formData.department}
                onValueChange={(value) =>
                  handleInputChange("department", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((dept) => (
                    <SelectItem key={dept} value={dept}>
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="hostel">Hostel</Label>
              <Select
                value={formData.hostel}
                onValueChange={(value) => handleInputChange("hostel", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your hostel" />
                </SelectTrigger>
                <SelectContent>
                  {hostels.map((hostel) => (
                    <SelectItem key={hostel} value={hostel}>
                      {hostel}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Photo URL field - commented out for later implementation */}
            {/* <div className="space-y-2">
              <Label htmlFor="photoUrl">Photo URL</Label>
              <Input
                id="photoUrl"
                value={formData.photoUrl}
                onChange={(e) => handleInputChange('photoUrl', e.target.value)}
                placeholder="Enter photo URL (optional)"
              />
            </div> */}
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <Users className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-balance">
                Guardian Information
              </h3>
            </div>

            <div className="space-y-2">
              <Label htmlFor="guardianName">Guardian Name</Label>
              <Input
                id="guardianName"
                value={formData.guardianName}
                onChange={(e) =>
                  handleInputChange("guardianName", e.target.value)
                }
                placeholder="Enter guardian's full name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="guardianPhoneNumber">Guardian Phone Number</Label>
              <Input
                id="guardianPhoneNumber"
                value={formData.guardianPhoneNumber}
                onChange={(e) =>
                  handleInputChange("guardianPhoneNumber", e.target.value)
                }
                placeholder="Enter guardian's phone number"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-card/95 backdrop-blur-sm shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-balance">
            Student Onboarding
          </CardTitle>
          <CardDescription className="text-pretty">
            Complete your registration to get started with your academic journey
          </CardDescription>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>
                Step {currentStep} of {totalSteps}
              </span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />

            {/* Step indicators */}
            <div className="flex justify-between mt-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      step <= currentStep
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step}
                  </div>
                  <span className="text-xs mt-1 text-muted-foreground">
                    {step === 1 && "Personal"}
                    {step === 2 && "Academic"}
                    {step === 3 && "Guardian"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CardHeader>

        <CardContent>
          {renderStepContent()}

          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="flex items-center gap-2 bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>

            {currentStep < totalSteps ? (
              <Button onClick={handleNext} className="flex items-center gap-2">
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                className="flex items-center gap-2"
              >
                Complete Registration
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
