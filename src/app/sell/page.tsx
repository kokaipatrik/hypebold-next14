'use client';

import useSell from './useSell';

import ImageUpload from '@/components/Form/ImageUpload';
import Input from '@/components/Form/Input';
import ListSelect from '@/components/Form/ListSelect';
import Select from '@/components/Form/Select';
import Radio from '@/components/Form/Radio';

import '@/app/assets/scss/form.scss';

export default function Sell() {
  const { config, form, sizeTypes, isSneaker, setValue, getSizesByCategory } =
    useSell();

  return (
    <div className='container mx-auto my-[60px] px-[20px]'>
      <div className='lg:mx-auto lg:w-[70%]'>
        <h1>Sell</h1>
        <div className='lg:flex lg:gap-[60px]'>
          <div className='lg:order-1 lg:w-1/2'>
            <ImageUpload />
          </div>
          <div className='lg:order-0 lg:w-1/2'>
            <div className='form-item'>
              <Input
                type='text'
                id='product_name'
                label='Product name'
                placeholder='Jordan 1 High'
                autoComplete='false'
              />
            </div>
            <div className='form-item'>
              <Input
                type='number'
                id='product_price'
                label='Product price'
                fixPlaceholder='$'
                autoComplete='false'
              />
            </div>
            <div className='form-item'>
              <ListSelect
                name='brand'
                label='Choose brand'
                items={config.brands}
                select={setValue}
              />
            </div>
            <div className='form-item'>
              <ListSelect
                name='category'
                label='Choose category'
                items={config.categories}
                select={setValue}
              />
            </div>
            {form?.category && (
              <div className='form-item'>
                <div className='flex items-end gap-[12px]'>
                  <div className={`${isSneaker ? 'w-[70%]' : 'w-[100%]'}`}>
                    <Select
                      name='size'
                      label='Size'
                      placeholder='Choose size'
                      items={getSizesByCategory(form?.category.value)}
                      select={setValue}
                      selected={form['size']}
                      selectedDependency={form['sizeType']}
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
              </div>
            )}
            {!form?.category && (
              <div className='form-item'>
                <label>Size</label>
                <p>Please first select a category!</p>
              </div>
            )}
            <div className='form-item'>
              <Radio
                name='condition'
                label='Choose condition'
                items={config.conditions}
                select={setValue}
                selected={form['condition']}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
