// Reviews to be displayed on reviews section

export interface IReview {
    name: string;
    rating: number;
    review: string;
    image: string;
}

export const reviews: IReview[] = [
    {
        name: "Emily Tran",
        rating: 5,
        review: "“Super slick design and easy to use — I was able to set up my account and start transferring internationally in minutes. Love how transparent the fees are (because there are none!).”",
        image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    },
    {
        name: "Javier Morales",
        rating: 5,
        review: "“Honestly, one of the best banking apps I've used. The multi-currency account saved me while traveling across Europe. The only thing I'd like is even more budgeting tools.”",
        image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    },
    {
        name: "Talia Ng",
        rating: 4.5,
        review: "“As a digital nomad, this app is a game changer. Free ATM withdrawals, fast support, and everything just works. Finally, a bank that doesn't feel like one.”",
        image: "https://images.pexels.com/photos/1006073/pexels-photo-1006073.jpeg",
    },
    {
        name: "Noah Schmidt",
        rating: 5,
        review: "“Switching to this app made managing my freelance income across currencies effortless. The instant notifications and clean interface make a huge difference in my day-to-day.”",
        image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    },
    {
        name: "Aisha Khan",
        rating: 4.5,
        review: "“Great support team and solid international features. I was a bit skeptical at first, but it's easily become my go-to financial app for both work and travel.”",
        image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    },
    {
        name: "Lucas Moretti",
        rating: 4,
        review: "“Really intuitive to use, though I'd love to see more integrations in the future. Still, transfers are quick and the no-fee policy is a game-changer.”",
        image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    },
];
