import { redirect } from 'next/navigation';

/* This arrays are need it because Tailwind dump every class that wasn't hardcoded on the code. */
const typeBorderColours = ['border-normal', 'border-fire', 'border-water', 'border-electric', 'border-grass', 'border-ice', 'border-fighting', 'border-poison', 'border-ground', 'border-flying', 'border-psychic', 'border-bug', 'border-rock', 'border-ghost', 'border-dragon', 'border-dark', 'border-steel', 'border-fairy', 'border-stellar', 'border-unknown'];
const typeBgColours = ['bg-normal', 'bg-fire', 'bg-water', 'bg-electric', 'bg-grass', 'bg-ice', 'bg-fighting', 'bg-poison', 'bg-ground', 'bg-flying', 'bg-psychic', 'bg-bug', 'bg-rock', 'bg-ghost', 'bg-dragon', 'bg-dark', 'bg-steel', 'bg-fairy', 'bg-stellar', 'bg-unknown'];
const typeTextColours = ['text-normal', 'text-fire', 'text-water', 'text-electric', 'text-grass', 'text-ice', 'text-fighting', 'text-poison', 'text-ground', 'text-flying', 'text-psychic', 'text-bug', 'text-rock', 'text-ghost', 'text-dragon', 'text-dark', 'text-steel', 'text-fairy', 'text-stellar', 'text-unknown'];

export default function Home() {
  console.log(`${typeBorderColours[0]} ${typeBgColours[0]} ${typeTextColours}`); 
  redirect(`/types`);
}
