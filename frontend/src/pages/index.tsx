import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';

export default function RootLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

[
    {
        "nonprofits": [
            {
                "ein": "207288696",
                "name": "Spay and Neuter Intermountain Pets and Pet Placement",
                "profileUrl": "https://www.every.org/snippp",
                "matchedTerms": [
                    "pet"
                ],
                "slug": "snippp",
                "location": "MCARTHUR, CA",
                "tags": [
                    "animals"
                ]
            },
            {
                "ein": "371440098",
                "name": "Pet Project For Pets Inc",
                "profileUrl": "https://www.every.org/pet-project-for-pets-inc",
                "matchedTerms": [
                    "pet"
                ],
                "slug": "pet-project-for-pets-inc",
                "location": "WILTON MANORS, FL",
                "tags": [
                    "health"
                ]
            },
            {
                "ein": "311622434",
                "name": "Pet Fbi-Pets Found By Internet",
                "profileUrl": "https://www.every.org/pet-fbi-pets-found-by-internet",
                "matchedTerms": [
                    "pets"
                ],
                "slug": "pet-fbi-pets-found-by-internet",
                "location": "HILLIARD, OH",
                "tags": [
                    "animals"
                ]
            },
            {
                "description": "Gingers Pet Rescue is a nonprofit organization focused on advocating or providing services for animals. . Ginger’s Pet Rescue is a 501(c)3 non-profit organization – one of the largest non-profit pet rescue organizations in Washington state specializ",
                "ein": "830347515",
                "name": "Gingers Pet Rescue",
                "profileUrl": "https://www.every.org/gingers-pet-rescue",
                "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/fdmanr9qflxhawuxvrkm",
                "coverImageUrl": "https://res.cloudinary.com/everydotorg/image/upload/f_auto,c_limit,w_3840,q_80/profile_pics/himakzkzc6zwr72jco47",
                "logoCloudinaryId": "profile_pics/fdmanr9qflxhawuxvrkm",
                "matchedTerms": [
                    "pet"
                ],
                "slug": "gingers-pet-rescue",
                "location": "SHORELINE, WA",
                "tags": [
                    "animals"
                ]
            },
            {
                "ein": "942851279",
                "name": "Pets Lifeline",
                "profileUrl": "https://www.every.org/pets-lifeline",
                "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/petlifeline_tsias0",
                "coverImageUrl": "https://res.cloudinary.com/everydotorg/image/upload/f_auto,c_limit,w_3840,q_80/cat_b9ztko",
                "logoCloudinaryId": "petlifeline_tsias0",
                "matchedTerms": [
                    "pets"
                ],
                "slug": "pets-lifeline",
                "location": "SONOMA, California, 95476-0341 United States",
                "tags": [
                    "animals"
                ]
            },
            {
                "description": "Our mission is to rescue, foster, rehabilitate and rehome abandoned, abused, and unwanted animals.\n. We are an all-breed no kill animal rescue dedicated to rescuing animals at risk of euthanasia in shelters, as well as those surrendered by their own",
                "ein": "474727620",
                "name": "Wags and Whiskers Pet Rescue",
                "profileUrl": "https://www.every.org/wagsandwhiskerspetrescue",
                "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/hkaymizc0iwiednyofpi",
                "coverImageUrl": "https://res.cloudinary.com/everydotorg/image/upload/f_auto,c_limit,w_3840,q_80/profile_pics/isxovbe9pbsts7ympktj",
                "logoCloudinaryId": "profile_pics/hkaymizc0iwiednyofpi",
                "matchedTerms": [
                    "pet"
                ],
                "slug": "wagsandwhiskerspetrescue",
                "location": "Chico, CA, USA",
                "tags": [
                    "dogs",
                    "cats",
                    "animals"
                ]
            },
            {
                "description": "Feeding Pets of the Homeless® believes in the healing power of pets. . Mission Statement\nFeeding Pets of the Homeless® believes in the healing power of companion pets and of the human/animal bond, which is very important in the lives of many homeles",
                "ein": "263010540",
                "name": "Feeding Pets of the Homeless",
                "profileUrl": "https://www.every.org/petsofthehomeless",
                "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/sw0qu36szc7cbxsk7beb",
                "coverImageUrl": "https://res.cloudinary.com/everydotorg/image/upload/f_auto,c_limit,w_3840,q_80/faja_cover/zaskdww7xyfe40ztwztc",
                "logoCloudinaryId": "faja_profile/sw0qu36szc7cbxsk7beb",
                "matchedTerms": [
                    "pets"
                ],
                "slug": "petsofthehomeless",
                "location": "CARSON CITY, Nevada, 89703 United States",
                "tags": [
                    "humans",
                    "food-security",
                    "seniors",
                    "veterans",
                    "housing",
                    "dogs",
                    "cats",
                    "animals"
                ]
            },
            {
                "description": "Our Homeward Pet's mission is to transform the lives of cats and dogs in need through compassionate medical care, positive behavior training, and successful adoption while building a more humane community..",
                "ein": "911526803",
                "name": "Homeward Pet Adoption Center",
                "profileUrl": "https://www.every.org/homewardpet",
                "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/yx2bf7ajag59igzhv7uk",
                "coverImageUrl": "https://res.cloudinary.com/everydotorg/image/upload/f_auto,c_limit,w_3840,q_80/profile_pics/mex8ybnpzbwxiuxngqvy",
                "logoCloudinaryId": "faja_profile/yx2bf7ajag59igzhv7uk",
                "matchedTerms": [
                    "pet"
                ],
                "slug": "homewardpet",
                "location": "WOODINVILLE, Washington, 98072-2293 United States",
                "tags": [
                    "animals"
                ]
            },
            {
                "ein": "453361571",
                "name": "Pet Pals-pets in Education and Therapy-people and Animals in Life",
                "profileUrl": "https://www.every.org/petpalscedarvalley",
                "matchedTerms": [
                    "pets"
                ],
                "slug": "petpalscedarvalley",
                "location": "CEDAR FALLS, IA",
                "tags": [
                    "wildlife",
                    "animals"
                ]
            },
            {
                "description": "Our mission (and passion) is helping shelters & rescues find loving adopters for homeless pets!. We’re North America’s largest non-profit pet adoption website. We're on a mission to help homeless pets find loving homes. #adoptapet",
                "ein": "954761276",
                "name": "Adopt-a-Pet.com",
                "profileUrl": "https://www.every.org/humane-america-animal-foundation",
                "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/oymwbbbwkv2yxgptws4d",
                "coverImageUrl": "https://res.cloudinary.com/everydotorg/image/upload/f_auto,c_limit,w_3840,q_80/profile_pics/zbiqynxs1fxq4hdnoduj",
                "logoCloudinaryId": "faja_profile/oymwbbbwkv2yxgptws4d",
                "matchedTerms": [
                    "pet"
                ],
                "slug": "humane-america-animal-foundation",
                "location": "CLAREMONT, California, 91711-4611 United States",
                "tags": [
                    "animals"
                ]
            }
        ]
    }
]