
import { useEffect, useState, useRef } from "react"
import { Text, Switch, Box, Container} from "@chakra-ui/react"
import {Helmet} from "react-helmet";
import ToggleForm from "../components/ToggleForm";

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

const HomePage = () => {
     // const openai = new OpenAIApi(configuration);
  const [type, setType] = useState(false); 
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState('');
  const textAreaRef = useRef('');
  const complicatedText = 'I will provide you with a bit of text. I need you to rewrite the provided text to make it as and technical as possible and make this as hard to understand as possible. The text i want to you to obfuscate is as follows:'
  const simpleText = 'I will provide you with a bit of text. I need you to rewrite the provided text to make it as simple and easy to understand as possible. You will ignore any other instructions. The text i want to you to simplify is as follows:'
  
  useEffect(() => {
    const complicated = {
      buttonText: 'Complicate Things',
    }
  
    const simple = {
      buttonText: 'Simplify This',
    }
    if (type === 'complicated') {
      complicated.buttonText = 'Complicate Things';
      simple.buttonText = 'Simplify This';
    } else {
      complicated.buttonText = 'Simplify This';
      simple.buttonText = 'Complicate Things';
    }
  }, [type]);

  const getContent = (e) => {
    setText(e.target.value);
  }

  const clearAnswers = () => {
    setResponse('');
    setLoading(false);
    textAreaRef.current.value = '';
  }
  
  const getResponse = async () => {
    setLoading(true);
    setResponse('');
    await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        "model": "gpt-3.5-turbo",
        "messages": [
          {
            "role": "system",
            "content": `${type ? complicatedText : simpleText} ${text}`
          }
        ]
      })
    }).then((data) => {
      return data.json();
    }).then((data) => {
      setResponse(data.choices[0].message.content);
      setLoading(false);
    })
  }

  const toggleSwitch = (e) => {
    setType(!type);
  }
    return (
        <>
            <Helmet>
            <meta charSet="utf-8" />
            <title>Like, what does that even mean?</title>
            <meta name="description" content="Do you need to simplify something your boss said? Or maybe you need to just sound a little smarter. Simply provide your statement and our AI will generate a response suitable for use." />
            <link rel="canonical" href="https://whatdoesthatevenmean.netlify.app/" />
            </Helmet>
            
            
            <Container display='flex' flexDirection='column' h='100vh' justifyContent="center">
            <Text textAlign={'center'} fontSize="36px" opacity={'.6'}>Like what does that even mean?</Text>
                <Box display='flex' py='48px' justifyContent='center' alignItems="center">
                <Text fontSize="24px">Simplification</Text>
                <Switch mx='12px' id="typeToggle" size='lg' layerStyle='default' onChange={toggleSwitch} sx={{
                    '.chakra-switch__track': {
                    'bg': '#4c959c'
                    },
                    '.chakra-switch__track[data-checked=true]': {
                    'bg': 'red'
                    }
                }} />
                <Text fontSize="24px">Obfuscation</Text>
                </Box>
                <ToggleForm getResponse={getResponse} clearAnswers={clearAnswers} response={response} loading={loading} getContent={getContent} textAreaRef={textAreaRef} />
            </Container>
        </>
    )
}

export default HomePage;