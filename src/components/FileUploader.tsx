import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Clipboard } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function FileUploader({ onFileSelect }) {
    const [pasteContent, setPasteContent] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) onFileSelect(file);
    };

    const handlePasteSubmit = () => {
        if (pasteContent.trim()) {
            // Create a Blob from the pasted content
            const blob = new Blob([pasteContent], { type: 'text/csv' });
            // Create a File object from the Blob
            const file = new File([blob], 'pasted-content.csv', { type: 'text/csv' });
            onFileSelect(file);
        }
    };

    return (
        <Card className="p-6">
            <Tabs defaultValue="paste">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="paste">Paste CSV</TabsTrigger>
                    <TabsTrigger value="upload">Upload File</TabsTrigger>
                </TabsList>
                
                <TabsContent value="paste" className="text-center">
                    <CardContent>
                        <Clipboard className="mx-auto mb-4 h-12 w-12 text-indigo-600"/>
                        <p className="mb-4 text-lg">Paste your CSV content</p>
                        <textarea
                            className="w-full h-40 p-2 border border-gray-300 rounded-md mb-4"
                            placeholder="Paste your CSV content here..."
                            value={pasteContent}
                            onChange={(e) => setPasteContent(e.target.value)}
                        ></textarea>
                        <Button 
                            variant="secondary" 
                            type="button" 
                            onClick={handlePasteSubmit}
                            disabled={!pasteContent.trim()}
                        >
                            Process CSV
                        </Button>
                    </CardContent>
                </TabsContent>

                <TabsContent value="upload" className="text-center">
                    <CardContent>
                        <Upload className="mx-auto mb-4 h-12 w-12 text-indigo-600"/>
                        <p className="mb-4 text-lg">Upload your quiz CSV file</p>
                        <input
                            type="file"
                            accept=".csv"
                            onChange={handleFileChange}
                            className="hidden"
                            id="file-input"
                        />
                        <label htmlFor="file-input" className="cursor-pointer inline-block">
                            <Button variant="secondary" type="button" onClick={() => document.getElementById('file-input')?.click()}>
                                Choose File
                            </Button>
                        </label>
                    </CardContent>
                </TabsContent>
            </Tabs>
        </Card>
    );
}
