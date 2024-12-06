// frontend/src/components/FormComponent.js
"use client";

import React, { useState } from "react";
import axios from "axios";
// import { Button, Input, Label, Textarea, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Checkbox, Alert, AlertDescription } from "@/components/ui";
// import { Button, Input, Label } from "../ui";

export default function FormComponent() {
  const [formData, setFormData] = useState({
    productName: "",
    brandName: "",
    articleNumber: "",
    photo: null,
    category: "",
    keyword: "",
    buyoutPlan: "",
    dailyBuyoutPlan: "10",
    wbPrice: "0",
    customerPrice: "0",
    telegramUsername: "",
    paymentTiming: "",
    reviewRequirements: "",
    approveReview: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formPayload = {
        ...formData,
        photo: formData.photo ? formData.photo.name : null,
      };

      const response = await axios.post(
        "http://localhost:5000/api/products",
        formPayload
      );
      console.log("Продукт успешно добавлен:", response.data);
      alert("Продукт успешно добавлен!");
    } catch (error) {
      console.error("Ошибка при добавлении продукта:", error);
      alert("Ошибка при добавлении продукта");
    }
  };

  return <form onSubmit={handleSubmit}>{/* Ваши поля формы из кода */}</form>;
}
