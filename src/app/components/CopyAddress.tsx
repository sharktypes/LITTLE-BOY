'use client'

import { CheckIcon, ClipboardIcon } from '@radix-ui/react-icons'
import { IconButton, Tooltip } from '@radix-ui/themes'
import useClipboard from 'react-use-clipboard'

export default function CopyAddress() {
  const [isAddrCopied, setAddrIsCopied] = useClipboard(
    '0x6296acA7f6CB68fA94B4271007e83c530aCFC64C',
    {
      successDuration: 1500,
    }
  )

  return (
    <Tooltip content='Copy address'>
      <IconButton variant='soft' onClick={setAddrIsCopied}>
        {isAddrCopied ? <CheckIcon /> : <ClipboardIcon />}
      </IconButton>
    </Tooltip>
  )
}
