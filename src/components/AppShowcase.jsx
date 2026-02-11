import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Play, Home, Compass, User } from 'lucide-react';
import appIcon from '../assets/icon.png';
import oshiLogo from '../assets/oshi-logo.png';

const ANILIST_QUERY = `
fragment MediaFields on Media {
    id
    title {
        romaji
        english
    }
    coverImage {
        large
        extraLarge
    }
    bannerImage
    averageScore
    description
    genres
    status
}

query {
    hero: Media(search: "Oshi no Ko", type: ANIME) {
        ...MediaFields
    }
    trending: Page(page: 1, perPage: 8) {
        media(sort: TRENDING_DESC, type: ANIME, isAdult: false) {
            ...MediaFields
        }
    }
    popular: Page(page: 1, perPage: 8) {
        media(sort: POPULARITY_DESC, type: ANIME, isAdult: false) {
            ...MediaFields
        }
    }
    action: Page(page: 1, perPage: 8) {
        media(genre: "Action", sort: POPULARITY_DESC, type: ANIME, isAdult: false) {
            ...MediaFields
        }
    }
    romance: Page(page: 1, perPage: 8) {
        media(genre: "Romance", sort: POPULARITY_DESC, type: ANIME, isAdult: false) {
            ...MediaFields
        }
    }
    fantasy: Page(page: 1, perPage: 8) {
        media(genre: "Fantasy", sort: POPULARITY_DESC, type: ANIME, isAdult: false) {
            ...MediaFields
        }
    }
    sciFi: Page(page: 1, perPage: 8) {
         media(genre: "Sci-Fi", sort: POPULARITY_DESC, type: ANIME, isAdult: false) {
             ...MediaFields
         }
    }
}
`;

export default function AppShowcase() {
    const [data, setData] = useState({
        hero: null,
        trending: [],
        popular: [],
        action: [],
        romance: [],
        fantasy: [],
        sciFi: []
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAnime = async () => {
            try {
                const response = await fetch('https://graphql.anilist.co', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ query: ANILIST_QUERY }),
                });
                const result = await response.json();
                if (result.data) {
                    setData({
                        hero: result.data.hero || null,
                        trending: result.data.trending?.media || [],
                        popular: result.data.popular?.media || [],
                        action: result.data.action?.media || [],
                        romance: result.data.romance?.media || [],
                        fantasy: result.data.fantasy?.media || [],
                        sciFi: result.data.sciFi?.media || []
                    });
                }
            } catch (error) {
                console.error("Error fetching AniList data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAnime();
    }, []);

    // Categories configuration
    const categories = [
        { title: "Tendencias", items: data.trending },
        { title: "Más Populares", items: data.popular },
        { title: "Acción", items: data.action },
        { title: "Romance", items: data.romance },
        { title: "Fantasía", items: data.fantasy },
        { title: "Ciencia Ficción", items: data.sciFi },
    ];

    return (
        <div className="flex justify-center items-center py-10">
            {/* --- PHONE FRAME --- */}
            <div className="relative w-[320px] h-[650px] bg-black rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden ring-4 ring-gray-900/50">
                {/* Dynamic Island / Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-50"></div>

                {/* Status Bar Mockup */}
                <div className="absolute top-2 w-full px-6 flex justify-between items-center z-50 opacity-90">
                    <img src={appIcon} alt="App Icon" className="h-4 w-4 rounded-full" />
                    <div className="flex space-x-1">
                        <div className="w-4 h-2.5 bg-white rounded-sm"></div>
                        <div className="w-0.5 h-2.5 bg-white rounded-sm"></div>
                    </div>
                </div>

                {/* App Content */}
                <div className="w-full h-full bg-aniting-black text-white relative flex flex-col">

                    {/* SCROLLING CONTAINER */}
                    <div className="flex-1 overflow-hidden relative">
                        {loading ? (
                            <div className="flex items-center justify-center h-full text-gray-500 text-sm animate-pulse">Cargando...</div>
                        ) : (
                            <motion.div
                                animate={{ y: [0, -800] }} // Increased scroll distance for more content
                                transition={{
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    ease: "easeInOut",
                                    duration: 25, // Slower duration for longer content
                                }}
                                className="pb-20"
                            >
                                {/* HERO SECTION */}
                                <div className="relative h-[450px] w-full mb-4">
                                    <div className="absolute inset-0">
                                        <img
                                            src={data.hero?.coverImage?.extraLarge || data.hero?.bannerImage}
                                            alt="Hero"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-aniting-black via-aniting-black/20 to-transparent"></div>
                                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col items-center text-center z-10">
                                        {/* Logo/Title Simulation */}
                                        <img
                                            src={oshiLogo}
                                            alt="Oshi no Ko Logo"
                                            className="h-24 object-contain mb-4 drop-shadow-2xl filter brightness-110"
                                        />

                                        <p className="text-xs text-gray-300 line-clamp-2 mb-6 px-2 drop-shadow-md">
                                            {data.hero?.description?.replace(/<[^>]*>/g, '')}
                                        </p>

                                        <button className="bg-white text-black px-8 py-3 rounded-lg font-bold flex items-center space-x-2 shadow-lg hover:scale-105 transition">
                                            <Play size={20} fill="black" />
                                            <span>Ver ahora</span>
                                        </button>

                                        {/* Carousel Indicators */}
                                        <div className="flex space-x-1.5 mt-6">
                                            <div className="w-4 h-1 bg-white rounded-full"></div>
                                            <div className="w-1.5 h-1 bg-gray-600 rounded-full"></div>
                                            <div className="w-1.5 h-1 bg-gray-600 rounded-full"></div>
                                            <div className="w-1.5 h-1 bg-gray-600 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* CATEGORIES SECTIONS */}
                                {categories.map((category, index) => (
                                    <div key={index} className="px-4 mb-6">
                                        <div className="flex justify-between items-end mb-3">
                                            <h3 className="text-lg font-bold text-white">{category.title}</h3>
                                            <span className="text-xs text-gray-400 flex items-center">Ver más <span className="ml-1">›</span></span>
                                        </div>

                                        <div className="flex space-x-3 overflow-visible">
                                            {category.items.map((anime) => (
                                                <div key={anime.id} className="w-[100px] flex-shrink-0">
                                                    <div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-2 shadow-md">
                                                        <img src={anime.coverImage.large} className="w-full h-full object-cover" alt={anime.title.romaji} />
                                                        <div className="absolute top-1 right-1 bg-black/60 backdrop-blur-md text-[8px] font-bold text-white px-1 py-0.5 rounded flex items-center">
                                                            <Star size={8} className="text-yellow-400 mr-0.5" fill="currentColor" />
                                                            {anime.averageScore ? (anime.averageScore / 10).toFixed(1) : 'N/A'}
                                                        </div>
                                                    </div>
                                                    <p className="text-[10px] text-gray-300 truncate">{anime.title.romaji}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </div>

                    {/* BOTTOM NAVIGATION (Fixed) */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-black/90 backdrop-blur-md border-t border-white/10 flex justify-around items-center px-2 z-50 rounded-b-[2.5rem]">
                        <div className="flex flex-col items-center space-y-1 text-white">
                            <Home size={20} fill="currentColor" />
                            <span className="text-[10px] font-medium">Inicio</span>
                        </div>
                        <div className="flex flex-col items-center space-y-1 text-gray-500">
                            <Compass size={20} />
                            <span className="text-[10px] font-medium">Explorar</span>
                        </div>
                        <div className="flex flex-col items-center space-y-1 text-gray-500">
                            <User size={20} />
                            <span className="text-[10px] font-medium">Perfil</span>
                        </div>
                    </div>

                    {/* Bottom fade for smooth look behind nav */}
                    <div className="absolute bottom-16 left-0 right-0 h-10 bg-gradient-to-t from-aniting-black to-transparent pointer-events-none z-40"></div>
                </div>
            </div>
        </div>
    );
}
