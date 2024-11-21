import React, { useState } from "react";
import axios from "axios";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    productName: "",
    brandName: "",
    articleNumber: "",
    photo: null, // Initially set to null
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
      // Prepare form data
      const data = new FormData();
      data.append("name", formData.productName);
      data.append("brand", formData.brandName);
      data.append("article_number", formData.articleNumber);
      data.append("category", formData.category);
      data.append("keywords", formData.keyword);
      data.append("purchase_plan", formData.buyoutPlan);
      data.append("daily_buyout_plan", formData.dailyBuyoutPlan);
      data.append("wb_price", formData.wbPrice);
      data.append("customer_price", formData.customerPrice);
      data.append("telegram_username", formData.telegramUsername);
      data.append("payment_timing", formData.paymentTiming);
      data.append("review_requirements", formData.reviewRequirements);
      data.append("approve_review", formData.approveReview);

      if (formData.photo) {
        data.append("photo", formData.photo); // Add photo only if it's not null
      }

      // Send request to the server
      const response = await axios.post(
        "http://localhost:5000/api/products",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Продукт добавлен:", response.data);
      alert("Продукт успешно добавлен!");
    } catch (error) {
      console.error("Ошибка при добавлении продукта:", error);
      alert("Произошла ошибка при добавлении продукта.");
    }
  };

  return (
    <div className="container">
      <h1>Добавить продукт</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Название продукта</label>
          <input
            type="text"
            value={formData.productName}
            onChange={(e) =>
              setFormData({ ...formData, productName: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label>Бренд</label>
          <input
            type="text"
            value={formData.brandName}
            onChange={(e) =>
              setFormData({ ...formData, brandName: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label>Артикул</label>
          <input
            type="text"
            value={formData.articleNumber}
            onChange={(e) =>
              setFormData({ ...formData, articleNumber: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label>Фото</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setFormData({ ...formData, photo: e.target.files[0] || null })
            }
            required
          />
        </div>

        <div>
          <label>Категория</label>
          <input
            type="text"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label>Ключевое слово</label>
          <input
            type="text"
            value={formData.keyword}
            onChange={(e) =>
              setFormData({ ...formData, keyword: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label>План по выкупам</label>
          <input
            type="text"
            value={formData.buyoutPlan}
            onChange={(e) =>
              setFormData({ ...formData, buyoutPlan: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label>План на сутки</label>
          <input
            type="number"
            value={formData.dailyBuyoutPlan}
            onChange={(e) =>
              setFormData({ ...formData, dailyBuyoutPlan: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label>Цена на ВБ</label>
          <input
            type="number"
            value={formData.wbPrice}
            onChange={(e) =>
              setFormData({ ...formData, wbPrice: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label>Цена для покупателя</label>
          <input
            type="number"
            value={formData.customerPrice}
            onChange={(e) =>
              setFormData({ ...formData, customerPrice: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label>Телеграм ник</label>
          <input
            type="text"
            value={formData.telegramUsername}
            onChange={(e) =>
              setFormData({ ...formData, telegramUsername: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label>Требования к отзыву</label>
          <textarea
            value={formData.reviewRequirements}
            onChange={(e) =>
              setFormData({ ...formData, reviewRequirements: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              checked={formData.approveReview}
              onChange={(e) =>
                setFormData({ ...formData, approveReview: e.target.checked })
              }
            />
            Согласовать отзыв
          </label>
        </div>

        <button type="submit">Добавить продукт</button>
      </form>
    </div>
  );
}
