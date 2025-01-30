"use client";
import { Avatar, Button, ButtonCell, Card, Cell, List, Section, Title } from "@telegram-apps/telegram-ui";
import { CardCell } from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell";
import { CardChip } from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardChip/CardChip";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { RiShieldUserLine } from "react-icons/ri";


export default function Home() {
  const router = useRouter();
  return (
    <main className="w-full h-full relative overflow-hidden">
      <header className="h-16 flex flex-row items-center bg-white px-2 py-2 w-full border-b border-x-slate-500">
        <div

          className="inline-block"
        >
          <Avatar
            src="https://avatars.githubusercontent.com/u/21981665?v=4"
            size={40}
          />
        </div>
        <div
          className="inline-block mx-2"

        >
          <Title
            level="4"
            weight="2">
            {"Aqil"}
          </Title>
        </div>

      </header>
      <div className="relative w-full h-full flex flex-col">
        <div>
          <div className="mt-4 mb-4 flex justify-center items-center flex-col">
            <img
              width={85}
              alt="Telegram sticker"
              className="blt0jZBzpxuR4oDhJc8s"
              src="https://em-content.zobj.net/source/telegram/386/money-bag_1f4b0.webp"
            />
            <Title
              level="3"
              weight="3">
              {"فروشگاه مجازی"}
            </Title>
            <div className="text-slate-500">
              <Title
                level=""
                weight="3">
                {"خرید و فروش طلا، دلار، تتر"}
              </Title>
            </div>
            <div className="flex justify-between w-full my-4">
              <div className="flex-1 justify-center pl-2 pr-1 items-center flex">
                <Button
                  mode="gray"
                  size="l"
                  stretched
                >
                  خرید
                </Button>
              </div>
              <div className="flex-1 justify-center  pl-1 pr-2 items-center flex">
                <Button
                  mode="gray"
                  size="l"
                  stretched
                >
                  فروش
                </Button>
              </div>

            </div>
          </div>
        </div>

        <div style={{ direction: "rtl" }}>
          <List
            style={{
              background: 'var(--tgui--secondary_bg_color)',
              padding: 10
            }}
          >
            <Section>
              <Cell
                before={<RiShieldUserLine size={30} color="#008aff" />}
                subtitle="مدیریت سفارشات و فاکتورها"
              >
                {
                  "سفارش های من"
                }
              </Cell>
              <ButtonCell
                onClick={() => router.push('/orders/new')}
                before={<CiCirclePlus size={30} />}
              >
                ثبت سفارش
              </ButtonCell>
            </Section>
            <Section>
              <Cell
              // before={<Icon32ProfileColoredSquare />}
              >
                تنظیمات
              </Cell>
              <Cell
              // before={<Icon32ProfileColoredSquare />}
              >
                کانال رسمی ما
              </Cell>
            </Section>
          </List>
        </div>



      </div>
    </main>
  );
}
