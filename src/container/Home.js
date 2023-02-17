/* eslint-disable prettier/prettier */

import { Box, Button, Center, Image, ScrollView, Stack, Text } from 'native-base';
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Box bg={'#183718'} >
                    <Center bg={'#2c3d2a'}>
                        <Stack direction={'row'} space={2} py={1}>
                            <Text fontSize="xs" fontWeight="medium" color="#FF8BFF">Try ChatGPT</Text>
                            <Text fontSize="xs" fontWeight="medium" color="#FF8BFF">Learn more</Text>
                        </Stack>
                    </Center>
                    {/* Nav Bar */}
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems="flex-end" px={4} pt={4}>
                        <Stack>
                            <Text fontSize={'2xl'} color="#FF8BFF">OpenAI</Text>
                        </Stack>
                        <Stack direction={'row'} space={8} pb={1}>
                            <Text fontSize="xs" fontWeight="medium" letterSpacing={0.5} color="#FF8BFF">API</Text>
                            <Text fontSize="xs" fontWeight="medium" letterSpacing={0.5} color="#FF8BFF">RESEARCH</Text>
                            <Text fontSize="xs" fontWeight="medium" letterSpacing={0.5} color="#FF8BFF">BLOG</Text>
                            <Text fontSize="xs" fontWeight="medium" letterSpacing={0.5} color="#FF8BFF">ABOUT</Text>
                        </Stack>
                    </Stack>
                    {/* Hero Image */}
                    <Stack px={4}>
                        <Stack direction={['column', 'column', 'row']} justifyContent={['space-between']}>
                            <Stack mt={16} width={['350', '440', '400', '472', '4/6']}>
                                <Text fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }} letterSpacing={0.5} lineHeight={{ base: 42, sm: 42, md: 52, lg: 62 }} color="#FF8BFF">ChatGPT: Optimizing Language Models for Dialogue</Text>
                                <Text mt={4} fontSize={{ base: 'xs', sm: 'sm', md: 'sm', lg: 'md' }} letterSpacing={0.5} color="#FF8BFF">We’ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests. ChatGPT is a sibling model to InstructGPT, which is trained to follow an instruction in a prompt and provide a detailed response.</Text>
                                <Box alignItems="flex-start" mt={8}>
                                    <Button
                                        variant={'subtle'}
                                        bg="#FF8BFF" _text={{
                                            fontSize: { base: 'xs', sm: 'sm', md: 'sm', lg: 'md' },
                                            color: '#183718',
                                            fontWeight: 'medium',
                                        }}>TRY CHATGPT</Button>
                                </Box>
                                <Stack py={8}>
                                    <Text fontSize="xs" letterSpacing={0.5} color="#FF8BFF">November 30, 2022</Text>
                                    <Text fontSize="xs" letterSpacing={0.5} color="#FF8BFF" >13 minute read</Text>
                                </Stack>
                            </Stack >

                            <Stack pb={8} pt={[0, 0, 20]} pr={2}>
                                <Image
                                    source={{ uri: 'https://openai.com/content/images/size/w1400/2023/01/chatgpt.jpg' }}
                                    size={400}
                                    alt="Chat GPT Hero Image" />
                            </Stack>
                        </Stack>
                    </Stack>
                </Box >
                {/* Body */}
                <Stack bg={'#ffffff'} >
                    <Box display={'flex'} py={16} px={4} w={['100%', '100%', '70%', '70%', '70%']}>
                        <Text fontSize={'md'} >We are excited to introduce ChatGPT to get users’ feedback and learn about its strengths and weaknesses. During the research preview, usage of ChatGPT is free. Try it now at chat.openai.com.</Text>
                    </Box>
                    <Stack >
                        <Text px={4} fontSize={'xl'} >Samples</Text>
                        <Text px={4} fontSize={'md'} >In the following sample, ChatGPT asks the clarifying questions to debug code.</Text>
                        <Box bg="#F4F4F4" mt={4} py={4}>
                            <Text px={4} fontSize={'sm'} color="warmGray.500">User</Text>
                            <Text px={4} fontSize={'md'} >this code is not working like i expect — how do i fix it?</Text>
                            <Box bg="#ededed" my={8} mx={4} p={4} rounded={'sm'}>
                                <Text fontSize={'sm'} >
                                    "resultWorkerErr := make(chan error) {'\n'}
                                    defer close(resultWorkerErr){'\n'}
                                    go func() &#123;
                                    defer cancel(){'\n'}
                                    resultWorkerErr b.resultWorker(ctx){'\n\r'}
}()

                                    err := b.worker(ctx){'\n'}
                                    cancel(){'\n'}
                                    if err == nil &#123;{'\n'}
                                    return resultWorkerErr{'\n'}
}
                                    return multierror.Append(err, resultWorkerErr)"</Text>
                            </Box>
                        </Box>
                        <Box bg={'#dfffe2'} py={6}>
                            <Box w={['100%', '100%', '70%', '70%', '70%']}>
                                <Text px={4} fontSize={'sm'} color="warmGray.500">ChatGPT</Text>
                                <Text px={4} fontSize={'md'} >It’s difficult to say what’s wrong with the code without more context. Can you provide more information about what the code is supposed to do and what isn’t working as expected? Also, is this the entire code or just a part of it?</Text>
                            </Box>
                        </Box>
                        <Box bg="#F4F4F4" py={6}>
                            <Box w={['100%', '100%', '70%', '70%', '70%']}>
                                <Text px={4} fontSize={'sm'} color="warmGray.500">User</Text>
                                <Text px={4} fontSize={'md'} >just part of it — the error never surfaces. I think there is something wrong with the channel</Text>
                            </Box>
                        </Box>
                        <Box bg={'#dfffe2'} py={6}>
                            <Box w={['100%', '100%', '70%', '70%', '70%']}>
                                <Text px={4} fontSize={'sm'} color="warmGray.500">ChatGPT</Text>
                                <Text px={4} fontSize={'md'} >It’s difficult to say without more information about what the code is supposed to do and what’s happening when it’s executed. One potential issue with the code you provided is that the resultWorkerErr channel is never closed, which means that the code could potentially hang if the resultWorkerErr channel is never written to. This could happen if b.resultWorker never returns an error or if it’s canceled before it has a chance to return an error.</Text>
                            </Box>
                            <Box bg="#d8f7db" my={8} mx={4} p={4} rounded={'sm'}>
                                <Text fontSize={'sm'} >
                                    close(resultworkerErr)</Text>
                            </Box>
                            <Box w={['100%', '100%', '70%', '70%', '70%']}>
                                <Text px={4} fontSize={'md'} >This would ensure that the resultWorkerErr channel is always closed, even if b.resultWorker never returns an error. Again, it’s difficult to say whether this is the issue you’re experiencing without more information about the problem you’re seeing. Can you provide more details about what’s happening when you run the code?</Text>
                            </Box>
                        </Box>
                        <Box alignItems="flex-start" m={4}>
                            <Button
                                variant={'subtle'}
                                bg="#000000" _text={{
                                    fontSize: { base: 'xs', sm: 'sm', md: 'sm', lg: 'md' },
                                    color: '#ffffff',
                                    fontWeight: 'medium',
                                }}>TRY CHATGPT</Button>
                        </Box>
                    </Stack>

                    {/* Methods */}
                    <Stack mt={8} px={4}>
                        <Box w={['100%', '100%', '70%', '70%', '70%']}>
                            <Text fontSize={'xl'} >Methods</Text>
                            <Text mt={2} fontSize={'md'} >We trained this model using Reinforcement Learning from Human Feedback (RLHF), using the same methods as InstructGPT, but with slight differences in the data collection setup. We trained an initial model using supervised fine-tuning: human AI trainers provided conversations in which they played both sides—the user and an AI assistant. We gave the trainers access to model-written suggestions to help them compose their responses. We mixed this new dialogue dataset with the InstructGPT dataset, which we transformed into a dialogue format. {'\n\r'}To create a reward model for reinforcement learning, we needed to collect comparison data, which consisted of two or more model responses ranked by quality. To collect this data, we took conversations that AI trainers had with the chatbot. We randomly selected a model-written message, sampled several alternative completions, and had AI trainers rank them. Using these reward models, we can fine-tune the model using Proximal Policy Optimization. We performed several iterations of this process.</Text>
                            {/* Image */}
                            <Text mt={4} fontSize={'md'} >ChatGPT is fine-tuned from a model in the GPT-3.5 series, which finished training in early 2022. You can learn more about the 3.5 series here. ChatGPT and GPT 3.5 were trained on an Azure AI supercomputing infrastructure.</Text>
                        </Box>
                    </Stack>
                </Stack>

                <Box py={24} px={4} bg={'#ffffff'}>
                    <Stack>
                        <Stack direction={'row'} >
                            <Box flex={0.5}>
                                <Text fontSize="xs" fontWeight="bold">FEATURED</Text>
                                <Box mt={4}>
                                    <Text fontSize="md" >ChatGPT</Text>
                                    <Text fontSize="md" >DALL·E 2</Text>
                                    <Text fontSize="md" >Whisper</Text>
                                    <Text fontSize="md" >Alignment</Text>
                                    <Text fontSize="md" >Startup Fund</Text>
                                </Box>
                            </Box>
                            <Box flex={0.4}>
                                <Text fontSize="xs" fontWeight="bold">API</Text>
                                <Box mt={4}>
                                    <Text fontSize="md" >Overview</Text>
                                    <Text fontSize="md" >Pricing</Text>
                                    <Text fontSize="md" >Docs</Text>
                                    <Text fontSize="md" >Terms & Policies</Text>
                                    <Text fontSize="md" >Status</Text>
                                    <Text fontSize="md" >Log in</Text>
                                </Box>
                            </Box>
                        </Stack>
                        <Stack direction={'row'} mt={16}>
                            <Box flex={0.5}>
                                <Text fontSize="xs" fontWeight="bold">BLOG</Text>
                                <Box mt={4}>
                                    <Text fontSize="md" >Index</Text>
                                    <Text fontSize="md" >Research</Text>
                                    <Text fontSize="md" >Announcements</Text>
                                    <Text fontSize="md" >Events</Text>
                                    <Text fontSize="md" >Milestones</Text>
                                </Box>
                            </Box>
                            <Box flex={0.4}>
                                <Text fontSize="xs" fontWeight="bold">INFORMATION</Text>
                                <Box mt={4}>
                                    <Text fontSize="md" >About Us</Text>
                                    <Text fontSize="md" >Our Charter</Text>
                                    <Text fontSize="md" >Our Research</Text>
                                    <Text fontSize="md" >Publications</Text>
                                    <Text fontSize="md" >Newsroom</Text>
                                    <Text fontSize="md" >Careers</Text>
                                </Box>
                            </Box>
                        </Stack>
                    </Stack>
                </Box>
                <Box pb={8} px={4} bg={'#ffffff'}>
                    <Text fontSize="md" >OpenAI © 2015–2023 Privacy Policy Terms of Use</Text>
                </Box>
            </ScrollView>
        </SafeAreaView >
    );
};

export default HomeScreen;

