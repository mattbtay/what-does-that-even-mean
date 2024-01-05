import {Box, Button, Textarea, Text, Skeleton, Stack} from '@chakra-ui/react'

const ToggleForm = ({getResponse, loading, response, clearAnswers, getContent, textAreaRef}) => {
    return (
        <>
        <Box mb="24px">
          <Textarea ref={textAreaRef} rows="10" placeholder='Add your statement and our AI will evaluate and produce an appropriate answer' onKeyUp={getContent} />
          <Box mt='12px' display='flex' gap='12px'> 
            <Button colorScheme='green' onClick={getResponse}>Get Solution</Button>
            <Button onClick={clearAnswers}>Clear</Button>
          </Box>
        </Box>
        {
            (loading || response) &&
            <Box border="1px solid rgba(0,0,0,.4)" borderRadius="10px" p="12px" fontStyle="italic">
            {loading &&
                <Stack>
                <Skeleton height='20px' />
                <Skeleton height='20px' />
                <Skeleton height='20px' width='50%' />
                </Stack>
            }
            {response &&
                <Text>{response}</Text>
            }
          </Box>
}
</>
    )
}

export default ToggleForm