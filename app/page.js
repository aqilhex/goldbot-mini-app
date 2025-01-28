"use client";
import { Avatar, ButtonCell, Card, Cell, List, Section, Title } from "@telegram-apps/telegram-ui";
import { CardCell } from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell";
import { CardChip } from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardChip/CardChip";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main className="w-full h-full relative">
      <header className="h-18 bg-white p-4 w-full border-b border-x-slate-500">
        <Avatar
          acronym="ah"
          size={48}
        />
      </header>
      <div className="relative w-full h-full flex">
        <Title
          level="3"
          weight="3">
          {"P2P"}
        </Title>
        <List
  style={{
    background: 'var(--tgui--secondary_bg_color)',
    padding: 10
  }}
>
  <Section>
    <Cell
      // before={<Icon32ProfileColoredSquare />}
      subtitle="Manage ads and payment settings"
    >
      My Ads
    </Cell>
    <ButtonCell 
    // before={<Icon28AddCell />}
    >
      Create Ad
    </ButtonCell>
  </Section>
</List>

      </div>
    </main>
  );
}
