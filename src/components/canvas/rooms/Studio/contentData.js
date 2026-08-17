/**
 * Studio Content Data
 * 
 * Custom content for Yash's interactive monitor towers.
 */

export const PLATFORM_CONFIG = {
    youtube: {
        color: '#00D9FF',
        accentColor: '#5BE7FF',
        icon: '▶',
        label: 'Tech Demo',
        shape: 'tv', // Wide CRT style
    },
    blog: {
        color: '#5BE7FF',
        accentColor: '#00D9FF',
        icon: '📝',
        label: 'Case Study',
        shape: 'monitor', // Thin desktop monitor
    },
    tiktok: {
        color: '#00D9FF',
        accentColor: '#5BE7FF',
        icon: '📱',
        label: 'Micro Motion',
        shape: 'phone', // Vertical phone
    },
    linkedin: {
        color: '#00D9FF',
        accentColor: '#5BE7FF',
        icon: 'in',
        label: 'Milestone',
        shape: 'monitor',
    },
    codrops: {
        color: '#00D9FF',
        accentColor: '#5BE7FF',
        icon: '💧',
        label: 'Featured',
        shape: 'monitor',
    },
};

const RAW_CONTENT_DATA = [
    // ============ Projects ============
    {
        id: 'studio-abtalks',
        platform: 'blog',
        title: 'ABtalks AI Interviewer: Building a Real-Time AI Mock Interview Platform',
        description: 'How I built an AI-powered interview simulator that generates role-specific questions, evaluates user responses in real time, and provides actionable feedback.',
        frontTexture: '/textures/studio/monitorfront_postnafbdoublewinner.webp',
        paintedFrontTexture: '/textures/studio/monitorfront_postnafbdoublewinner_painted.webp',
        thumbnail: null,
        url: 'https://a-btalks-ten.vercel.app',
        date: '2026-08-09',
        readTime: '6 min',
    },
    {
        id: 'studio-bharatapp',
        platform: 'blog',
        title: 'BharatAPP: TypeScript-First Full Stack Architecture for Indian Users',
        description: 'Deep dive into building a type-safe full stack application with strict TypeScript, component-driven React, and a clean scalable codebase.',
        frontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp',
        thumbnail: null,
        url: 'https://github.com/Yea-shDevs/BharatAPP',
        date: '2026-08-16',
        readTime: '5 min',
    },
    {
        id: 'studio-bigbasket',
        platform: 'blog',
        title: 'BigBasket Clone: Pixel-Perfect E-Commerce UI with Responsive CSS Architecture',
        description: 'How I replicated BigBasket\'s complex multi-section grocery platform layout using semantic HTML and structured CSS — deployed on Vercel.',
        frontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp',
        thumbnail: null,
        url: 'https://bigbasket-hazel.vercel.app',
        date: '2026-08-07',
        readTime: '4 min',
    },
    {
        id: 'studio-freshmart',
        platform: 'linkedin',
        title: 'FreshMart: Building a Full Grocery E-Commerce App with Vanilla JavaScript',
        description: 'How I delivered a complete grocery shopping experience — product listings, cart management, and responsive UI — using zero frameworks.',
        thumbnail: null,
        url: 'https://yea-shdevs.github.io/FreshMart-/',
        date: '2026-05-01',
        readTime: '5 min',
    },
    {
        id: 'studio-myvalentine',
        platform: 'tiktok',
        title: 'My Valentine: Creative Coding with CSS Animations & Interactive Storytelling',
        description: 'Building a delightful interactive Valentine\'s Day web experience using CSS keyframe animations, event-driven JavaScript, and narrative UI flows.',
        frontTexture: '/textures/studio/phonefront_followmeontiktok.webp',
        paintedFrontTexture: '/textures/studio/phonefront_followmeontiktok_painted.webp',
        thumbnail: null,
        url: 'https://yea-shdevs.github.io/myvalentine/',
        date: '2026-04-22',
        views: '1.2K',
        likes: '230',
    },
    {
        id: 'studio-webdev',
        platform: 'blog',
        title: 'WebDev Workspace 2.0: My College Semester Web Dev Journey',
        description: 'A walkthrough of my complete second-semester web development syllabus — from HTML/CSS fundamentals through JavaScript DOM and modern web patterns.',
        thumbnail: null,
        url: 'https://github.com/Yea-shDevs/webdev-workspace-2.0',
        date: '2026-05-27',
        readTime: '6 min',
    },
    {
        id: 'studio-leetcode',
        platform: 'blog',
        title: 'LeetCode Grind: My DSA Solutions in C++',
        description: 'Documenting my competitive programming journey — solving LeetCode problems in C++ with clean, optimized solutions and explanations.',
        thumbnail: null,
        url: 'https://github.com/Yea-shDevs/LeetCode',
        date: '2026-07-26',
        readTime: '4 min',
    },
];

const ytTextures = ['/textures/studio/tvfront_filmikprojektdlamultiego.webp', '/textures/studio/tvfront_filmikedytowaniezdjec.webp'];
const ytPaintedTextures = ['/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp', '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp'];
const blogTextures = ['/textures/studio/monitorfront_postnafbdoublewinner.webp'];
const blogPaintedTextures = ['/textures/studio/monitorfront_postnafbdoublewinner_painted.webp'];
const ttTextures = ['/textures/studio/phonefront_followmeontiktok.webp'];
const ttPaintedTextures = ['/textures/studio/phonefront_followmeontiktok_painted.webp'];

let ytIdx = 0, blogIdx = 0, ttIdx = 0;
let ytPIdx = 0, blogPIdx = 0, ttPIdx = 0;

export const CONTENT_DATA = RAW_CONTENT_DATA.map((item) => {
    return {
        ...item,
        frontTexture: item.frontTexture || (
            item.platform === 'youtube' ? ytTextures[ytIdx++ % ytTextures.length] :
                item.platform === 'blog' ? blogTextures[blogIdx++ % blogTextures.length] :
                    ttTextures[ttIdx++ % ttTextures.length]
        ),
        paintedFrontTexture: item.paintedFrontTexture || (
            item.platform === 'youtube' ? ytPaintedTextures[ytPIdx++ % ytPaintedTextures.length] :
                item.platform === 'blog' ? blogPaintedTextures[blogPIdx++ % blogPaintedTextures.length] :
                    ttPaintedTextures[ttPIdx++ % ttPaintedTextures.length]
        )
    };
});

export const getContentByPlatform = (platform) => {
    if (platform === 'all') return CONTENT_DATA;
    return CONTENT_DATA.filter(item => item.platform === platform);
};

export const getLatestContent = () => {
    return [...CONTENT_DATA].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
};
