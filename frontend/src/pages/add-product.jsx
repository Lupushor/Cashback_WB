'use client';

import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Label } from '../components/ui/Label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ArrowLeft } from 'lucide-react';

const Component = () => {
  const [formData, setFormData] = useState({
    productName: '',
    brandName: '',
    articleNumber: '',
    photo: null,
    category: '',
    keyword: '',
    buyoutPlan: '',
    dailyBuyoutPlan: '10',
    wbPrice: '0',
    customerPrice: '0',
    telegramUsername: '',
    paymentTiming: '',
    reviewRequirements: '',
    approveReview: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex items-center justify-between p-4 border-b bg-white">
        <Button variant="ghost" size="sm" className="text-gray-500">
          <ArrowLeft className="w-4 h-4 mr-2" />
          ОТМЕНИТЬ
        </Button>
        <h1 className="text-base font-medium">Добавить товар</h1>
        <Button variant="ghost" size="sm" className="text-purple-600">
          ОТПРАВИТЬ
        </Button>
      </header>

      <form onSubmit={handleSubmit} className="p-4 space-y-6">
        <div className="space-y-4">
          <div>
            <Label className="flex justify-between">
              Название товара
              <span className="text-sm text-gray-500">Обязательное</span>
            </Label>
            <Input
              placeholder="Введите название товара"
              value={formData.productName}
              onChange={(e) =>
                setFormData({ ...formData, productName: e.target.value })
              }
              required
            />
          </div>

          <div>
            <Label className="flex justify-between">
              Бренд товара
              <span className="text-sm text-gray-500">Обязательное</span>
            </Label>
            <Input
              placeholder="Введите бренд товара"
              value={formData.brandName}
              onChange={(e) =>
                setFormData({ ...formData, brandName: e.target.value })
              }
              required
            />
          </div>

          <div>
            <Label className="flex justify-between">
              Артикул
              <span className="text-sm text-gray-500">Обязательное</span>
            </Label>
            <Input
              placeholder="Введите артикул"
              value={formData.articleNumber}
              onChange={(e) =>
                setFormData({ ...formData, articleNumber: e.target.value })
              }
              required
            />
            <Alert className="mt-2 bg-purple-50 text-purple-900 border-purple-100">
              <AlertDescription>
                Внимательно вводите номер артикула. По нему будет проводиться
                подтверждение товара
              </AlertDescription>
            </Alert>
          </div>

          <div>
            <Label className="flex justify-between">
              Фото товара
              <span className="text-sm text-gray-500">Обязательное</span>
            </Label>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setFormData({ ...formData, photo: e.target.files?.[0] || null })
              }
              required
            />
          </div>

          <div>
            <Label className="flex justify-between">
              Категория
              <span className="text-sm text-gray-500">Обязательное</span>
            </Label>
            <Select
              value={formData.category}
              onValueChange={(value) =>
                setFormData({ ...formData, category: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Выберите категорию" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="category1">Категория 1</SelectItem>
                <SelectItem value="category2">Категория 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="flex justify-between">
              Ключевое слово
              <span className="text-sm text-gray-500">Обязательное</span>
            </Label>
            <Input
              placeholder='Например "рубашка в клетку"'
              value={formData.keyword}
              onChange={(e) =>
                setFormData({ ...formData, keyword: e.target.value })
              }
              required
            />
          </div>

          <div>
            <Label className="flex justify-between">
              Общий план по выкупам
              <span className="text-sm text-gray-500">Обязательное</span>
            </Label>
            <Select
              value={formData.buyoutPlan}
              onValueChange={(value) =>
                setFormData({ ...formData, buyoutPlan: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Выберите план" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="plan1">План 1</SelectItem>
                <SelectItem value="plan2">План 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="flex justify-between">
              План выкупов на сутки
              <span className="text-sm text-gray-500">Обязательное</span>
            </Label>
            <Input
              type="number"
              value={formData.dailyBuyoutPlan}
              onChange={(e) =>
                setFormData({ ...formData, dailyBuyoutPlan: e.target.value })
              }
              required
            />
          </div>

          <div>
            <Label className="flex justify-between">
              Цена на вб (руб)
              <span className="text-sm text-gray-500">Обязательное</span>
            </Label>
            <Input
              type="number"
              value={formData.wbPrice}
              onChange={(e) =>
                setFormData({ ...formData, wbPrice: e.target.value })
              }
              required
            />
          </div>

          <div>
            <Label className="flex justify-between">
              Цена для покупателя
              <span className="text-sm text-gray-500">Обязательное</span>
            </Label>
            <Input
              type="number"
              value={formData.customerPrice}
              onChange={(e) =>
                setFormData({ ...formData, customerPrice: e.target.value })
              }
              required
            />
          </div>

          <div>
            <Label className="flex justify-between">
              Телеграм ник для связи
              <span className="text-sm text-gray-500">Обязательное</span>
            </Label>
            <Input
              placeholder='Например "ruslanamantayev"'
              value={formData.telegramUsername}
              onChange={(e) =>
                setFormData({ ...formData, telegramUsername: e.target.value })
              }
              required
            />
            <Alert className="mt-2 bg-purple-50 text-purple-900 border-purple-100">
              <AlertDescription>
                Введенное имя преобразуется в ссылку для связи с вами:
                https://t.me/{formData.telegramUsername}
              </AlertDescription>
            </Alert>
          </div>

          <div>
            <Label className="flex justify-between">
              Когда выплата
              <span className="text-sm text-gray-500">Обязательное</span>
            </Label>
            <Select
              value={formData.paymentTiming}
              onValueChange={(value) =>
                setFormData({ ...formData, paymentTiming: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Выберите время выплаты" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="timing1">После подтверждения</SelectItem>
                <SelectItem value="timing2">После доставки</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="flex justify-between">
              Требования к отзыву
              <span className="text-sm text-gray-500">Обязательное</span>
            </Label>
            <Textarea
              placeholder="Опишите ваши требования к фото/видео/тексту/оценке/"
              value={formData.reviewRequirements}
              onChange={(e) =>
                setFormData({ ...formData, reviewRequirements: e.target.value })
              }
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="approveReview"
              checked={formData.approveReview}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, approveReview: checked })
              }
            />
            <label
              htmlFor="approveReview"
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Согласовать отзыв
            </label>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white"
        >
          Отправить заявку
        </Button>
      </form>
    </div>
  );
};

export default Component;
