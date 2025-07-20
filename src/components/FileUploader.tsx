import {Card, CardContent} from "@/components/ui/card";
import {Upload} from 'lucide-react';
import {Button} from "@/components/ui/button";

export function FileUploader({onFileSelect}) {
    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file) onFileSelect(file);
    };

    return (
        <Card className="p-6 text-center">
            <CardContent>
                <Upload className="mx-auto mb-4 h-12 w-12 text-indigo-600"/>
                <p className="mb-4 text-lg">Upload your quiz CSV file</p>
                <input
                    type="file"
                    accept=".csv"
                    onChange={handleChange}
                    className="hidden"
                    id="file-input"
                />
                <label htmlFor="file-input" className="cursor-pointer inline-block">
                    <Button variant="secondary" type="button" onClick={() => document.getElementById('file-input')?.click()}>
                        Choose File
                    </Button>
                </label>
            </CardContent>
        </Card>
    );
}
