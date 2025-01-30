"use client";
import { Avatar, Breadcrumbs, Button, ButtonCell, Card, Cell, Chip, Input, List, Radio, Section, Title } from "@telegram-apps/telegram-ui";
import { CardCell } from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell";
import { CardChip } from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardChip/CardChip";
import { BreadCrumbsItem } from "@telegram-apps/telegram-ui/dist/components/Navigation/Breadcrumbs/components/BreadCrumbsItem/BreadCrumbsItem";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { RiShieldUserLine } from "react-icons/ri";
import { TbBasketQuestion } from "react-icons/tb";
import { TbUserQuestion } from "react-icons/tb";
import { TbPencilQuestion } from "react-icons/tb";

export default function Home() {
  const router = useRouter()
  const [orderType, setOrderType] = useState("خرید")
  return (
    <main className="w-full h-full relative overflow-hidden">
      <header style={{ direction: 'rtl' }} className="h-16 flex flex-row items-center bg-white px-2 py-2 w-full border-b border-x-slate-500">
        <div

          className="inline-block"
        >
          <Avatar
            src="https://avatars.githubusercontent.com/u/21981665?v=4"
            size={40}
          />
        </div>
        <Breadcrumbs divider="chevron">
          <BreadCrumbsItem onClick={() => router.back()}>
            {"صفحه اصلی"}
          </BreadCrumbsItem>
          <BreadCrumbsItem>
            {"ثبت سفارش"}
          </BreadCrumbsItem>
        </Breadcrumbs>

      </header>
      <div className="relative w-full h-full flex flex-col mb-[4rem]">
        <div>
          <div className="mt-4 mb-4 flex justify-center items-center flex-col">
            <img
              width={85}
              alt="Telegram sticker"
              className="blt0jZBzpxuR4oDhJc8s"
              src="https://em-content.zobj.net/source/telegram/386/money-with-wings_1f4b8.webp"
            />
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
                before={<TbUserQuestion size={30} color="#008aff" />}
              >
                {
                  "نوع آگهی را مشخص کنید"
                }
              </Cell>

            </Section>
            <div className="flex justify-between w-full my-4">

              <div className="flex-1 justify-center pl-2 pr-1 items-center flex">

                <Chip mode="mono" className="w-full text-right" Component="label" before={<Radio onClick={()=>setOrderType("فروش")} name="test" />}>
                  میخوام بفروشم
                </Chip>

              </div>
              <div className="flex-1 justify-center pl-1 pr-2 items-center flex">
                <Chip mode="mono" className="w-full text-right" Component="label" before={<Radio onClick={()=>setOrderType("خرید")} defaultChecked name="test" />}>
                  میخوام بخرم
                </Chip>
              </div>

            </div>

            <Section>
              <Cell
                before={<TbBasketQuestion size={30} color="#008aff" />}
              >
                {
                  `قصد ${orderType} کدام را دارید؟`
                }
              </Cell>

            </Section>
            <div className="flex justify-between w-full my-4">

              <div className="flex-1 justify-center pl-2 pr-1 items-center flex">

                <Chip mode="mono" className="w-full text-right" Component="label" before={<Radio name="crypto" />}>
                  {"طلا"}
                </Chip>

              </div>
              <div className="flex-1 justify-center pl-1 pr-2 items-center flex">
                <Chip mode="mono" className="w-full text-right" Component="label" before={<Radio defaultChecked name="crypto" />}>
                  {"دلار"}
                </Chip>
              </div>
              <div className="flex-1 justify-center pl-1 pr-2 items-center flex">
                <Chip mode="mono" className="w-full text-right" Component="label" before={<Radio defaultChecked name="crypto" />}>
                  {"تتر"}
                </Chip>
              </div>

            </div>

            <Section>
              {/* <Cell
                before={<TbPencilQuestion size={30} color="#008aff" />}
              >
                {
                  "مقدار"
                }
              </Cell> */}
              <div className="px-6">
              <input placeholder="مقدار را وارد کنید" className="w-full my-2 py-2 focus-visible:outline-0 focus-visible:border-b-2 border-b-[#008aff] duration-[0.05s] ease-in border-b-blue"/>

              </div>

            </Section>

          </List>
          </div>



      </div>
      <div className="fixed bottom-0 z-10 px-2 py-2 w-full bg-white">
        <Button
        disabled
          size="l"
          stretched
        >
          ثبت
        </Button>
      </div>
    </main>
  );
}
