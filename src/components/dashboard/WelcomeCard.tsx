
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Share2 } from 'lucide-react';
type WelcomeCardProps = {
  name: string;
  profileProgress: number;
};
export const WelcomeCard = ({
  name,
  profileProgress
}: WelcomeCardProps) => {
  return <Card className="border border-gray-200 shadow-sm">
      <CardContent className="pt-6">
        <div className="text-xl font-semibold mb-4">Welcome back, {name}</div>
        
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="relative mb-4">
            <div className="text-center text-2xl font-bold">{profileProgress}%</div>
            <div className="w-24 h-24 mx-auto relative">
              {/* This is a simplified circular progress indicator */}
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle className="text-gray-200" strokeWidth="10" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" />
                <circle className="text-mrxp-blue" strokeWidth="10" strokeDasharray={`${profileProgress * 2.51} 251`} strokeLinecap="round" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" />
              </svg>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-base font-medium text-black">mrxp</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <span>Profile Completed</span>
            <CheckCircle className="w-4 h-4 ml-1 text-green-500" />
          </div>
        </div>
        
        <Button className="w-full text-white bg-green-700 hover:bg-green-600">
          <Share2 className="mr-2 h-4 w-4" />
          Experience Report
        </Button>
      </CardContent>
    </Card>;
};
