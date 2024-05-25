"use client";
import NextImage from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn, formatPrice } from "@/lib/utils";
import { Rnd } from "react-rnd";
import HandleComponent from "@/components/HandleComponent";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import { RadioGroup } from "@headlessui/react";
import { useRef, useState } from "react";
import {
  COLORS,
  FINISHES,
  MATERIALS,
  MODELS,
} from "@/validators/option-validator";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ChevronsUpDown } from "lucide-react";
import { BASE_PRICE } from "@/config/products";

interface DesignConfigProps {
  configId: string;
  imageUrl: string;
  imageDimensions: {
    width: number;
    height: number;
  };
}

const DesignConfigurator = ({
  imageUrl,
  imageDimensions,
  configId,
}: DesignConfigProps) => {
  const [options, setOptions] = useState<{
    color: (typeof COLORS)[number];
    model: (typeof MODELS.options)[number];
    material: (typeof MATERIALS.options)[number];
    finish: (typeof FINISHES.options)[number];
  }>({
    color: COLORS[0],
    model: MODELS.options[MODELS.options.length - 1],
    material: MATERIALS.options[0],
    finish: FINISHES.options[0],
  });

  const [renderDimensions, setRenderDimensions] = useState({
    width: imageDimensions.width / 4,
    height: imageDimensions.height / 4,
  });

  const [renderPostion, setRenderPosition] = useState({
    x: 150,
    y: 205,
  });

  const phoneCaseRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  async function saveConfiguration() {
    try {
      const {left: caseLeft , top: caseTop , width , height } = phoneCaseRef.current!.getBoundingClientRect();

      const { left: containerLeft, top:containerTop } =
        containerRef.current!.getBoundingClientRect();

        const leftOffset = caseLeft - containerLeft;
        const topOffset = caseTop - containerTop;

        const actualX = renderPostion.x - leftOffset;
        const actualY = renderPostion.y - topOffset;

        console.log("actualX", actualX);
        console.log("actualY", actualY);
        
        
    } catch (error) {

    }
  }

  return (
    <>
      <div className="relative mt-20 grid grid-cols-1 lg:grid-cols-3 mb-20 pb-20">
        <div
          ref={containerRef}
          className="relative h-[37.5rem] overflow-hidden col-span-2 w-full max-w-4xl flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-12 text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <div className="relative w-60 bg-opacity-50 pointer-events-none aspect-[896/1831]">
            <AspectRatio
              ref={phoneCaseRef}
              ratio={896 / 1831}
              className="pointer-events-none relative z-50 aspect-[896/1831] w-full"
            >
              <NextImage
                fill
                alt="phone image"
                src="/phone-template.png"
                className="pointer-events-none z-50 select-none"
              />
            </AspectRatio>
            <div className="absolute z-40 inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[32px] shadow-[0_0_0_99999px_rgba(229,231,235,0.6)]" />
            <div
              className={cn(
                "absolute inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[32px]",
                `bg-${options.color.tw}`
              )}
            />
          </div>

          <Rnd
            default={{
              x: 150,
              y: 205,
              height: imageDimensions.height / 4,
              width: imageDimensions.width / 4,
            }}
            onResizeStop={(_, __, ref, ___, { x, y }) => {
              setRenderDimensions({
                height: parseInt(ref.style.height.slice(0 - 2)),
                width: parseInt(ref.style.width.slice(0 - 2)),
              });

              setRenderPosition({ x, y });
            }}
            onDragStop={(_, data) => {
              const { x, y } = data;
              setRenderPosition({ x, y });
            }}
            className="absolute z-20 border-[3px] border-primary"
            lockAspectRatio
            resizeHandleComponent={{
              bottomRight: <HandleComponent />,
              bottomLeft: <HandleComponent />,
              topRight: <HandleComponent />,
              topLeft: <HandleComponent />,
            }}
          >
            <div className="relative w-full h-full">
              <NextImage
                src={imageUrl}
                fill
                alt="your image"
                className="pointer-events-none"
              />
            </div>
          </Rnd>
        </div>

        <div className="h-[37.5rem] w-full col-span-full lg:col-span-1 flex flex-col ">
          <ScrollArea className="relative flex-1 -mr-10 lg:-mr-10 overflow-auto">
            <div
              aria-hidden="true"
              className="absolute z-10 inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white pointer-events-none"
            />

            <div className="px-8 pb-12 pt-8">
              <h2 className="tracking-tight font-bold text-3xl">
                Customize your case
              </h2>

              <div className="w-full h-px bg-zinc-200 my-6" />

              <div className="relative mt-4 h-full flex flex-col justify-between">
                <div className="flex flex-col gap-6">
                  <RadioGroup
                    value={options.color}
                    onChange={(val) => {
                      setOptions((prev) => ({
                        ...prev,
                        color: val,
                      }));
                    }}
                  >
                    <Label>Color: {options.color.label}</Label>
                    <div className="mt-3 flex items-center space-x-3">
                      {COLORS.map((color) => (
                        <RadioGroup.Option
                          key={color.label}
                          value={color}
                          className={({ active, checked }) =>
                            cn(
                              "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 active:ring-0 focus:ring-0 active:outline-none focus:outline-none border-2 border-transparent",
                              {
                                [`border-${color.tw}`]: active || checked,
                              }
                            )
                          }
                        >
                          <span
                            className={cn(
                              `bg-${color.tw}`,
                              "h-8 w-8 rounded-full border border-black border-opacity-10"
                            )}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>

                  <div className="relative flex flex-col gap-3 w-full">
                    <Label>Model</Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          className="w-full justify-between"
                        >
                          {options.model.label}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        {MODELS.options.map((model) => (
                          <DropdownMenuItem
                            key={model.label}
                            className={cn(
                              "flex text-sm gap-1 items-center p-1.5 cursor-default hover:bg-zinc-100",
                              {
                                "bg-zinc-100":
                                  model.label === options.model.label,
                              }
                            )}
                            onClick={() => {
                              setOptions((prev) => ({ ...prev, model }));
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                model.label === options.model.label
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {model.label}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  {[MATERIALS, FINISHES].map(
                    ({ name, options: selectableOptions }) => (
                      <RadioGroup
                        key={name}
                        value={options[name]}
                        onChange={(val) => {
                          setOptions((prev) => ({
                            ...prev,
                            [name]: val,
                          }));
                        }}
                      >
                        <Label>
                          {name.slice(0, 1).toUpperCase() + name.slice(1)}
                        </Label>
                        <div className="mt-3 space-y-4">
                          {selectableOptions.map((option) => (
                            <RadioGroup.Option
                              key={option.value}
                              value={option}
                              className={({ active, checked }) =>
                                cn(
                                  "relative block cursor-pointer rounded-lg bg-white px-6 py-4 shadow-sm border-2 border-zinc-200 focus:outline-none ring-0 focus:ring-0 outline-none sm:flex sm:justify-between",
                                  {
                                    "border-primary": active || checked,
                                  }
                                )
                              }
                            >
                              <span className="flex items-center">
                                <span className="flex flex-col text-sm">
                                  <RadioGroup.Label
                                    className="font-medium text-gray-900"
                                    as="span"
                                  >
                                    {option.label}
                                  </RadioGroup.Label>

                                  {option.description ? (
                                    <RadioGroup.Description
                                      as="span"
                                      className="text-gray-500"
                                    >
                                      <span className="block sm:inline">
                                        {option.description}
                                      </span>
                                    </RadioGroup.Description>
                                  ) : null}
                                </span>
                              </span>

                              <RadioGroup.Description
                                as="span"
                                className="mt-2 flex text-sm sm:ml-4 sm:mt-0 sm:flex-col sm:text-right"
                              >
                                <span className="font-medium text-gray-900">
                                  {formatPrice(option.price / 100)}
                                </span>
                              </RadioGroup.Description>
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    )
                  )}
                </div>
              </div>
            </div>
          </ScrollArea>

          <div className="w-full px-8 h-16 ">
            <Separator className="w-full" />
            <div className="w-full h-full flex justify-end items-center">
              <div className="w-full flex gap-6">
                <p className="font-medium whitespace-nowrap">
                  Total:{" "}
                  {formatPrice(
                    (BASE_PRICE +
                      options.finish.price +
                      options.material.price) /
                      100
                  )}
                </p>
              </div>
              <div className="w-full h-full flex justify-end items-center  ">
                <span className="xl:text-sm text-xs font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500  to-pink-400 ">
                  + Free Delivery
                </span>
                😉
              </div>
            </div>
            <Button size="sm" className="w-full">
              Continue <ArrowRight className="h-5 w-4 ml-1.5 inline" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default DesignConfigurator;
