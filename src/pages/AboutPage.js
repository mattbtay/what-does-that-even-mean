import {Container, Text, Heading} from "@chakra-ui/react"

const AboutPage = () => {
    return (
        <>
        <Container maxW="2lx" position='absolute' top="60px" display="flex" flexDirection="column" alignItems={"center"} centerContent>
            <Heading as="h1" size="xl" mb="12px" mt="24px" align={"center"}>Company Philosophy</Heading>
            <Text mb="24px">We believe great moments bring great opportunity, and thats what we have here. </Text>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/2CdJTfGiRCI?si=lZ9KksolBdDCXp0R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Container>
        </>
    )
}
export default AboutPage;