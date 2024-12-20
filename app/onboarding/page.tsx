import { Card,CardContent,CardDescription,CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitButton } from "../components/SubmitButtons";

export default function Onboarding() {
    return (
        <div className="min-h-screen 
                        w-screen flex items-center justify-center">

        <Card className="max-w-sm mx-auto">
            <CardHeader>
               <CardTitle className="text-xl"> 
                 Almost done    
                </CardTitle>
                <CardDescription>Enter your info to create an acount</CardDescription>
            </CardHeader>
            <CardContent>
                <form action="" className="grid -gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <Label>
                                First Name
                            </Label>
                            <Input placeholder="John"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>
                                Last Name
                            </Label>
                            <Input placeholder="Doe"/>
                        </div>
                    </div>
                    <div className="grid gap-2">
                    <Label>
                        Address
                    </Label>
                      <Input placeholder="Chad street 123"/>
                    </div>

                    <SubmitButton text="OnBoard Submit" />
                
                </form>
            </CardContent>
        </Card>
        
        </div>
    )
}