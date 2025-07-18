import laptopServiceImg from "../assets/images/laptop-&-desktop-servicing.jpg";
import printerServiceImg from "../assets/images/printer-&-scanner-servicing0.jpg";
import networkDeviceImg from "../assets/images/network-device-servicing.jpg";
import attendenceDeviceImg from "../assets/images/attendance-device-servicing2.jpg";
import networkServiceImg from "../assets/images/Server-servicing.jpg";
import othersImg from "../assets/images/Others-servicing.jpg";

export const servicesOption = [
  {
    id: "RT101",
    value: "ল্যাপটপ এন্ড ডেস্কটপ সার্ভিসিং",
    label: "ল্যাপটপ এন্ড ডেস্কটপ সার্ভিসিং",
  },
  {
    id: "RP101",
    value: "প্রিন্টার এন্ড স্ক্যানার সার্ভিসিং",
    label: "প্রিন্টার এন্ড স্ক্যানার সার্ভিসিং",
  },
  {
    id: "RN101",
    value: "নেটওয়ার্ক ডিভাইস সার্ভিসিং",
    label: "নেটওয়ার্ক ডিভাইস সার্ভিসিং",
  },
  {
    id: "SN101",
    value: "সার্ভার সার্ভিসিং",
    label: "সার্ভার সার্ভিসিং",
  },
  {
    id: "RN101",
    value: "এটেনড্যান্স ডিভাইস এন্ড লক সার্ভিসিং",
    label: "এটেনড্যান্স ডিভাইস এন্ড লক সার্ভিসিং",
  },
  {
    id: "OTHERS",
    value: "অন্যান্য",
    label: "অন্যান্য",
  },
];

export const servicesData = [
  {
    id: "PCR101",
    name: "ল্যাপটপ এন্ড ডেস্কটপ সার্ভিসিং",
    description: "lorem",
    features: [
      "হার্ডওয়্যার ট্রাবলশুটিং",
      "সফটওয়্যার ট্রাবলশুটিং",
      "অপারেটিং সিস্টেম ইনস্টলেশন এবং আপগ্রেড",
      "ডাটা পুনরুদ্ধার",
      "হার্ডওয়্যার আপগ্রেড এবং মেন্টেনেন্স",
      "নেটওয়ার্ক সেটআপ এবং কনফিগারেশন",
      "ফরম্যাট এবং পুনরায় ইনস্টলেশন",
      "ডাটা সিকিউরিটি এবং ব্যাকআপ",
    ],
    image: laptopServiceImg,
  },
  {
    id: "PTR101",
    name: "প্রিন্টার এন্ড স্ক্যানার সার্ভিসিং",
    description: "lorem",
    features: [
      "হার্ডওয়্যার ট্রাবলশুটিং",
      "সফটওয়্যার ট্রাবলশুটিং",
      "অপারেটিং সিস্টেম ইনস্টলেশন এবং আপগ্রেড",
      "ডাটা পুনরুদ্ধার",
      "হার্ডওয়্যার আপগ্রেড এবং মেন্টেনেন্স",
      "নেটওয়ার্ক সেটআপ এবং কনফিগারেশন",
      "ফরম্যাট এবং পুনরায় ইনস্টলেশন",
      "ডাটা সিকিউরিটি এবং ব্যাকআপ",
    ],
    image: printerServiceImg,
  },
  {
    id: "NTR101",
    name: "নেটওয়ার্ক ডিভাইস সার্ভিসিং",
    description: "lorem",
    features: [
      "হার্ডওয়্যার ট্রাবলশুটিং",
      "সফটওয়্যার ট্রাবলশুটিং",
      "অপারেটিং সিস্টেম ইনস্টলেশন এবং আপগ্রেড",
      "ডাটা পুনরুদ্ধার",
      "হার্ডওয়্যার আপগ্রেড এবং মেন্টেনেন্স",
      "নেটওয়ার্ক সেটআপ এবং কনফিগারেশন",
      "ফরম্যাট এবং পুনরায় ইনস্টলেশন",
      "ডাটা সিকিউরিটি এবং ব্যাকআপ",
    ],
    image: networkDeviceImg,
  },
  {
    id: "ATR101",
    name: "এটেনড্যান্স ডিভাইস এন্ড লক সার্ভিসিং",
    description: "lorem",
    features: [
      "হার্ডওয়্যার ট্রাবলশুটিং",
      "সফটওয়্যার ট্রাবলশুটিং",
      "অপারেটিং সিস্টেম ইনস্টলেশন এবং আপগ্রেড",
      "ডাটা পুনরুদ্ধার",
      "হার্ডওয়্যার আপগ্রেড এবং মেন্টেনেন্স",
      "নেটওয়ার্ক সেটআপ এবং কনফিগারেশন",
      "ফরম্যাট এবং পুনরায় ইনস্টলেশন",
      "ডাটা সিকিউরিটি এবং ব্যাকআপ",
    ],
    image: attendenceDeviceImg,
  },
  {
    id: "NTR102",
    name: "সার্ভার সার্ভিসিং",
    description: "lorem",
    features: [
      "হার্ডওয়্যার ট্রাবলশুটিং",
      "সফটওয়্যার ট্রাবলশুটিং",
      "অপারেটিং সিস্টেম ইনস্টলেশন এবং আপগ্রেড",
      "ডাটা পুনরুদ্ধার",
      "হার্ডওয়্যার আপগ্রেড এবং মেন্টেনেন্স",
      "নেটওয়ার্ক সেটআপ এবং কনফিগারেশন",
      "ফরম্যাট এবং পুনরায় ইনস্টলেশন",
      "ডাটা সিকিউরিটি এবং ব্যাকআপ",
    ],
    image: networkServiceImg,
  },
  {
    id: "000000",
    name: "অন্যান্য",
    description: "lorem",
    features: [
      "হার্ডওয়্যার ট্রাবলশুটিং",
      "সফটওয়্যার ট্রাবলশুটিং",
      "অপারেটিং সিস্টেম ইনস্টলেশন এবং আপগ্রেড",
      "ডাটা পুনরুদ্ধার",
      "হার্ডওয়্যার আপগ্রেড এবং মেন্টেনেন্স",
      "নেটওয়ার্ক সেটআপ এবং কনফিগারেশন",
      "ফরম্যাট এবং পুনরায় ইনস্টলেশন",
      "ডাটা সিকিউরিটি এবং ব্যাকআপ",
    ],
    image: othersImg,
  },
];
