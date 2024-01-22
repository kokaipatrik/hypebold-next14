'use client';

import { useState } from 'react';

import { useConfigStore } from '@/store/config';
import type { Config, Size } from '@/store/config.types';

import Input from '@/components/Form/Input';
import ListSelect from '@/components/Form/ListSelect';
import Select from '@/components/Form/Select';

export default function Sell() {
  const store = useConfigStore();
  const config = store.config as Config;
  const [form, setForm] = useState<Record<string, any>>({
    sizeType: {
      name: 'EU',
      value: 'eu',
    },
  });
  const isSneaker = form?.category?.value === 'sneaker';

  const getSizesByCategory = (slug: string) => {
    const sizes = config?.sizes.filter((s) => s.categoryUrl === slug);

    if (isSneaker) {
      return sizes.map((size: any) => ({
        name: size.size[form?.sizeType.value],
        value: size.size[form?.sizeType.value],
      }));
    } else {
      return sizes.map(size => ({
        name: size.size,
        value: size.size,
      }));
    }
  }

  const sizeTypes = [
    {
      name: 'EU',
      value: 'eu',
    },
    {
      name: 'US',
      value: 'us',
    },
    {
      name: 'UK',
      value: 'uk',
    },
  ];

  const setValue = (value: any) => {
    setForm((prevState) => ({
      ...prevState,
      [value.name]: value.item,
    }));
  };

  return (
    <div className='container mx-auto px-[20px]'>
      <div className='lg:mx-auto lg:w-[70%]'>
        <h1>Sell</h1>
        <div className='lg:flex lg:gap-[60px]'>
          <div className='lg:order-1 lg:w-1/2'>image upload</div>
          <div className='lg:order-0 lg:w-1/2'>
            <Input
              type='text'
              id='product_name'
              label='Product name'
              placeholder='Jordan 1 High'
              autoComplete='false'
            />
            <Input
              type='number'
              id='product_price'
              label='Product price'
              fixPlaceholder='$'
              autoComplete='false'
            />
            <ListSelect
              name='brand'
              label='Choose brand'
              items={config.brands}
              select={setValue}
            />
            <ListSelect
              name='category'
              label='Choose category'
              items={config.categories}
              select={setValue}
            />
            {form?.category && (
            <div className='flex items-end gap-[12px]'>
              <div className={`${isSneaker ? 'w-[70%]' : 'w-[100%]'}`}>
                <Select
                  name='size'
                  label='Size'
                  placeholder='Choose size'
                  items={getSizesByCategory(form?.category.value)}
                  select={setValue}
                />
              </div>
              {isSneaker && (
                <div className='w-[30%]'>
                  <Select
                    name='sizeType'
                    placeholder='Size type'
                    items={sizeTypes}
                    select={setValue}
                    selected={form['sizeType']}
                  />
                </div>
              )}
            </div>
            )}
            {!form?.category && (
              <div>
                <label>Size</label>
                <p>Please first select a category!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
