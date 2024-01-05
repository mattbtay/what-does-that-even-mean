import { Heading, Text,Container } from "@chakra-ui/react"
import PricingTable from "../components/PricingTable"


const PricingPage = () => {
    return (
        <>
            <Container maxW="2lx" display="flex" flexDirection="column" alignItems={"center"} centerContent>
            <Heading mt="60px">Pricing</Heading>
            <Text>Choose the plan that's right for you, or don't it's cool.</Text>
            </Container>
           
            <PricingTable />
        </>
    )
}

export default PricingPage;