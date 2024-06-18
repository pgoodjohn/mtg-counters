"use client";
import React, { useState } from 'react';
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
import Image from "next/image";
import {
    Card,
} from "@/components/ui/card"

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

type CommanderSearchResultProps = {
    name: string;
    handleCommanderSelected: (commander: Commander) => void;
}

const CommanderSearchResultSelector: React.FC<CommanderSearchResultProps> = ({ name, handleCommanderSelected }) => {

    const [card, setCard] = React.useState<Scry.Card | null>(null);
    const [commander, setCommander] = useState<Commander | null>(null);

    async function loadCard(name: string) {
        const card = await Scry.Cards.byName(name);
        console.debug(card);
        setCard(card);

        let commander: Commander = {
            name: card.name,
            art_url: card.image_uris?.art_crop || "",
        };
        setCommander(commander);
    }

    if (card === null) {
        loadCard(name);
    }

    return (
        <div key={name}>
            {card && commander &&
            <Card key={card.name} className="mb-2">
                <DialogClose asChild>
                    <Button variant="ghost" onClick={() => handleCommanderSelected(commander)} className="h-[100px] w-full flex">
                        <div className="w-[100px] mr-2">
                            {card.image_uris &&
                             <Image src={card.image_uris.art_crop} alt={card.name} height="626" width="274" />
                            }
                        </div>
                        <div className="flex items-center justify-center">
                            <p className="p-4">{card.name}</p>
                        </div>
                        <div className="flex-grow"></div>
                    </Button>
                </DialogClose>
            </Card>
            }
        </div>
    )
}

export default CommanderSearch;