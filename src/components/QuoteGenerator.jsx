import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Quote } from 'lucide-react';

const quotes = [
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein"
  },
  {
    text: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost"
  },
  {
    text: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi"
  },
  {
    text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson"
  }
];

const QuoteGenerator = () => {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-lg shadow-lg transition-all duration-300 hover:shadow-xl">
        <CardHeader className="flex flex-col items-center space-y-4 pb-2">
          <Quote className="w-12 h-12 text-blue-500" />
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-xl md:text-2xl font-serif italic text-gray-800 mb-4">
              "{currentQuote.text}"
            </p>
            <p className="text-gray-600 font-medium">
              — {currentQuote.author}
            </p>
          </div>
          <div className="flex justify-center pt-4">
            <Button
              onClick={getRandomQuote}
              className="bg-blue-500 hover:bg-blue-600 transition-colors duration-200"
            >
              New Quote
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuoteGenerator;