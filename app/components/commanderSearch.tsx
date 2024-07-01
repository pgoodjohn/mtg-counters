"use client";
import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from '@/components/ui/button';
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Commander } from './types';
import * as Scry from "scryfall-sdk";
import CommanderSearchResultSelector from './commanderSearchResultSelector';

type CommanderSearchProps = {
    handleCommanderSelected: (commander: Commander) => void;
};

const formSchema = z.object({
    cardName: z.string(),
})

const CommanderSearch: React.FC<CommanderSearchProps> = ({ handleCommanderSelected }) => {

    const [searchResults, setSearchResults] = React.useState<string[]>([]);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            cardName: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.debug("Searching for: ", values);
        setSearchResults([]);
        const results = await Scry.Cards.autoCompleteName(values.cardName);
        setSearchResults(results.map((result) => {
            return result;
        }
        ));
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="m-2">Search</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Search</DialogTitle>
                    <DialogDescription>
                        Search for a card (by name)
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className='flex'>
                            <div className='flex-grow pr-4'>
                                <FormField
                                    control={form.control}
                                    name="cardName"
                                    render={({ field, fieldState }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <Button type="submit" className="px-8">Search</Button>
                        </div>
                    </form>
                </Form>
                {searchResults.length > 0 &&
                    <ScrollArea className='h-[400px]'>
                        {searchResults.map((result) => (
                            <CommanderSearchResultSelector key={result} name={result} handleCommanderSelected={handleCommanderSelected}/>
                        ))}
                    </ScrollArea>
                }
                <DialogClose asChild>
                    <Button>Close</Button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    )
}

export default CommanderSearch;