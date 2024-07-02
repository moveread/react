import React from 'react'
import { Button } from '@chakra-ui/react'

export function BrandBtn(props: Parameters<typeof Button>[0]) {
  return <Button colorScheme='brand' bg='brand.600' color='gray.50'
    _hover={{ bg: 'brand.700' }} _active={{ bg: 'brand.800' }}
    {...props}
  />
}

export function RedBtn(props: Parameters<typeof Button>[0]) {
  return <Button colorScheme='red' bg='red.600' color='gray.50'
    _hover={{ bg: 'red.700' }} _active={{ bg: 'red.800' }}
    {...props}
  />
}
