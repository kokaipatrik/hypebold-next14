'use client';

import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';

import PlaceholderImage from '@/app/assets/svg/placeholder-image.svg?svgr';
import Loader from '@/app/assets/svg/loader.svg?svgr';
import Order from '@/app/assets/svg/order.svg?svgr';

type FileStatus = 'uploading' | 'uploaded' | 'error';

interface FileHandler {
  fileDetails: File;
  status: FileStatus;
}

export default function ImageUpload() {
  const [files, setFiles] = useState<Array<FileHandler>>([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFiles((currentFiles) => [
        ...currentFiles,
        ...acceptedFiles.map((file) => ({
          fileDetails: file,
          status: 'uploading' as FileStatus,
        })),
      ]);

      for (const file of acceptedFiles) {
        console.log('file', file);
      }
    },
  });

  const getPreview = (file: File) => URL.createObjectURL(file);
  const getMb = (size: number) => `${(size / (1024 * 1024)).toFixed(2)} MB`;

  return (
    <div className='rounded-[12px] border-[1px] border-gray bg-gray-dark p-[28px] pt-[22px]'>
      <p className='mb-[18px]'>Image upload</p>
      <div
        className='flex cursor-pointer flex-col items-center justify-center rounded-[12px] border-[1px] border-dashed border-gray-4 bg-gray-dark-2 p-[46px] text-center [&>svg]:text-[#3F3F3F]'
        {...getRootProps()}
      >
        <PlaceholderImage />
        <input {...getInputProps()} />
        <p className='mt-[16px] text-[15px] font-medium text-gray-5'>
          Drag & drop or browse
        </p>
      </div>
      {files.length > 0 && (
        <div className='mt-[20px]'>
          {files.map((file) => (
            <div
              className='relative flex h-[68px] w-full mb-[20px] last-of-type:mb-0 items-center justify-between rounded-[12px] border-[1px] border-gray bg-gray-dark-2 p-[12px]'
              key={file.fileDetails.name}
            >
              <div className='mr-[12px]'>
                <Order />
              </div>
              <figure className='relative mr-[12px] h-[44px] w-[44px] overflow-hidden rounded-[12px]'>
                <Image
                  src={getPreview(file.fileDetails)}
                  alt={file.fileDetails.name}
                  className='absolute top-0 h-full w-full'
                  fill
                />
              </figure>
              <div className='col-span-4'>
                <p className='line-clamp-1 text-[14px] text-[#c7c7c7]'>
                  {file.fileDetails.name}
                </p>
                <span className='text-[12px] text-[#777777]'>
                  {getMb(file.fileDetails.size)}
                </span>
              </div>
              <div className='ml-auto animate-spin'>
                <Loader />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
