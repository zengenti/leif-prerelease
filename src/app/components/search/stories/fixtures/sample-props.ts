import { SearchFacets } from '~/core/schema';

const imageHost = 'http://preview.leif.zenhub.contensis.cloud';

export default {
  currentFacet: SearchFacets.all,
  exploreMore: [
    {
      title: 'Register for our new subscription service',
      text: 'Leif Club, our new subscription service helps you create a house full of beautiful healthy plants – one month at a time. All...',
      uri: '/register-for-our-new-subscription-service',
      imageUri: `${imageHost}/image-library/default-images/leif-fallback.png`,
    },
    {
      title: 'The best plants for looking after your skin',
      text: 'Did you know that houseplants are actually good for your skin? Here are our top 3 plants for a glowing complexion.',
      uri: '/blog/the-best-houseplants-for-your-skin',
      imageUri: `${imageHost}/image-library/blog-images/beach-towel-hands.x6bc859e5.png`,
      imageAlt:
        "Someone's hands with bright coral nail varnish crossed over each other on a beach towel.",
      type: 'blog',
      readTime: '2 min',
    },
    {
      title: 'The best houseplants for your bathroom',
      text: 'Here are our top 5 plants that are non-toxic for your furry best friend, but are still really popular houseplants.',
      uri: '/blog/the-best-houseplants-for-your-bathroom',
      imageUri: `${imageHost}/image-library/blog-images/plant-in-home.xdac77836.png`,
      imageAlt: 'Plant in a home',
      type: 'blog',
      readTime: '2 min',
    },
    {
      price: [6.99],
      ctaLink: '/products/pot/rosa-pot',
      isRenderedAsLink: true,
      uri: '/products/pot/rosa-pot',
      text: 'Rosa is a coral pink pot that will make any room pop.',
      imageAlt: 'A pink pot containing an Aloe plant.',
      isPromoted: [false],
      imageUri: `${imageHost}/image-library/product-images/pot-images/rosa-pot.xc5b87f51.jpg?w=400&h=280`,
      title: 'Rosa pot',
      type: 'product',
      ctaText: 'Find out more',
    },
  ],
  facets: {
    all: {
      title: 'All results',
      featuredEntries: {
        isLoading: false,
        isError: false,
      },
      featuredResults: [
        {
          price: [14.99],
          uri: '/products/pot/gra-small-grey-pot',
          text: 'Grå is a small grey concrete pot that gives foliage plants an architectural look.',
          imageAlt:
            'A small grey cylindrical pot containing a succulent plant. ',
          isPromoted: [false],
          imageUri: `${imageHost}/image-library/product-images/pot-images/gra-pot.x9a94e535.jpg?w=400&h=280`,
          title: 'Grå small grey pot',
          type: 'product',
        },
        {
          price: [9.99, 24.99],
          uri: '/products/plant/aloe-vera',
          text: 'Every kitchen should have an aloe vera plant. Well known for its amazing ability to soothe and heal burns, this amazing plan...',
          imageAlt: 'An Aloe vera plant in a gold pot.',
          isPromoted: [false],
          imageUri: `${imageHost}/image-library/product-images/plant-images/aloe-vera-gold-pot.x3d75c7a2.jpg?w=400&h=280`,
          title: 'Aloe vera',
          type: 'product',
        },
        {
          price: [6.99],
          uri: '/products/pot/rosa-pot',
          text: 'Rosa is a coral pink pot that will make any room pop.',
          imageAlt: 'A pink pot containing an Aloe plant.',
          isPromoted: [false],
          imageUri: `${imageHost}/image-library/product-images/pot-images/rosa-pot.xc5b87f51.jpg?w=400&h=280`,
          title: 'Rosa pot',
          type: 'product',
        },
      ],
      entries: {
        isLoading: false,
        isError: false,
      },
      results: [
        {
          price: [6.99, 12.99],
          uri: '/products/plant/spider-plant',
          text: "Breathe easy with help from a spider plant, or chlorophytum comosum – a classic air-filtering houseplant that's easy to grow...",
          imageAlt: 'A spider plant in a white pot on a blue desk.',
          imageUri: `${imageHost}/image-library/product-images/plant-images/spider-plant-on-table.x01542d01.jpg`,
          title: 'Spider plant',
          type: 'product',
        },
        {
          price: [23.99],
          uri: '/products/plant/swiss-cheese-plant',
          text: 'Bring laid-back central American vibes into your home with a monstera deliciosa, or Swiss cheese plant. This delicious monst...',
          imageAlt:
            'A pair of Swiss cheese plants in a brightly lit room with mid-century furniture. ',
          imageUri: `${imageHost}/image-library/product-images/plant-images/two-swiss-cheese-plants-in-room.x3a00f80a.jpg`,
          title: 'Swiss cheese plant',
          type: 'product',
        },
        {
          price: [17.99],
          uri: '/products/plant/snake-plant',
          text: "Snake plants are a great choice for beginners or those with less than green fingers. They're easy to care for, happily toler...",
          imageAlt:
            'A pair of variegated snake plants in white pots on a table next to a sofa. ',
          imageUri: `${imageHost}/image-library/product-images/plant-images/pair-of-snake-plants.x55c9dd5f.jpg`,
          title: 'Variegated snake plant',
          type: 'product',
        },
        {
          title: 'About us at Leif',
          text: 'Make your house a lush and verdant home with our range of plants, matching pots, and accessories.',
          imageUri: `${imageHost}/image-library/default-images/leif-fallback.png`,
          uri: '',
        },
        {
          readTime: '2 min',
          uri: '/blog/the-best-houseplants-for-your-skin',
          text: 'Did you know that houseplants are actually good for your skin? Here are our top 3 plants for a glowing complexion.',
          imageAlt:
            "Someone's hands with bright coral nail varnish crossed over each other on a beach towel.",
          imageUri: `${imageHost}/image-library/blog-images/beach-towel-hands.x6bc859e5.png`,
          title: 'The best plants for looking after your skin',
          type: 'blog',
        },
        {
          readTime: '3 min',
          uri: '/blog/why-plants-are-good-for-your-mental-health',
          text: 'Not only do houseplants look good – they do good too by supporting human health in homes, offices, schools and hospitals. Th...',
          imageAlt:
            'An illustration of a man sat at a desk with a large plant nearby. ',
          imageUri: `${imageHost}/image-library/blog-images/man-at-desk.x632fd3f2.png`,
          title: 'Why plants are good for your mental health',
          type: 'blog',
        },
        {
          readTime: '2 min',
          uri: '/blog/5-ways-to-keep-your-plants-happy-this-winter',
          text: 'Here are our top 5 plants that are non-toxic for your furry best friend, but are still really popular houseplants.',
          imageAlt: 'An illustration of a man watering a large potted plant.',
          imageUri: `${imageHost}/image-library/blog-images/man-watering-plants.xde4b3750.png`,
          title: '5 ways to keep your plants happy this winter',
          type: 'blog',
        },
        {
          readTime: '2 min',
          uri: '/blog/why-you-should-add-plants-to-your-workplace',
          text: 'Here are our top 5 plants that are non-toxic for your furry best friend, but are still really popular houseplants.',
          imageAlt: 'An illustration of a woman at a desk',
          imageUri: `${imageHost}/image-library/blog-images/woman-at-desk.xf703ec7a.png`,
          title: 'Why you should add plants to your workplace',
          type: 'blog',
        },
        {
          readTime: '2 min',
          uri: '/blog/top-5-dog-friendly-plants-you-need-right-now',
          text: 'Here are our top 5 plants that are non-toxic for your furry best friend, but are still really popular houseplants.',
          imageAlt:
            'A young dog sat on a dog bed with a plant in the background. ',
          imageUri: `${imageHost}/image-library/blog-images/dog-on-cushion.x6ea4705c.jpg`,
          title: 'Top 5 dog-friendly plants you need right now',
          type: 'blog',
        },
        {
          readTime: '2 min',
          uri: '/blog/how-to-look-after-your-plants-when-youre-going-on-holiday-copy',
          text: 'Here are our top 5 plants that are non-toxic for your furry best friend, but are still really popular houseplants.',
          imageAlt: 'An illustration of a woman watering a flower bed.',
          imageUri: `${imageHost}/image-library/blog-images/woman-watering-plants.x2b4add41.png`,
          title: "How to look after your plants when you're going on holiday",
          type: 'blog',
        },
      ],
      queryParams: {
        loadMorePaging: true,
        contentTypeIds: [
          'blogPost',
          'contentPage',
          'landingPage',
          'plant',
          'pot',
        ],
        featuredResults: {
          contentTypeId: ['plant', 'pot'],
          count: 3,
          fieldId: 'tags.entryTitle',
          fieldValue: 'promoted',
        },
        fields: [
          'entryTitle',
          'sys.contentTypeId',
          'sys.slug',
          'sys.uri',
          'sys.version.published',
          'summary',
          'kicker',
          'primaryImage',
          'sys.version.published',
          'postBody',
          'primaryImage',
          'tags',
          'productName',
          'description',
          'type',
          'plantVariant',
          'potVariant',
          'leadParagraph',
        ],
        linkDepth: 1,
        pageSize: 10,
        weightedSearchFields: [
          {
            fieldId: 'entryTitle',
            weight: 100,
          },
          {
            fieldId: 'entryDescription',
            weight: 50,
          },
          {
            fieldId: 'searchContent',
            weight: 10,
          },
          {
            fieldId: 'pageMetadata.metaDescription',
            weight: 50,
          },
        ],
      },
      filters: {},
      queryDuration: 0,
      pagingInfo: {
        isLoading: false,
        pageCount: 4,
        totalCount: 35,
        pageSize: 10,
        pageIndex: 0,
        pagesLoaded: [0],
        prevPageIndex: 0,
      },
      projectId: 'leif',
      preloaded: false,
    },
    blog: {
      title: 'Blogs',
      featuredEntries: {
        isLoading: false,
        isError: false,
      },
      featuredResults: [],
      entries: {
        isLoading: false,
        isError: false,
      },
      results: [
        {
          readTime: '2 min',
          _pageIndex: 0,
          uri: '/blog/the-best-houseplants-for-your-skin',
          text: 'Did you know that houseplants are actually good for your skin? Here are our top 3 plants for a glowing complexion.',
          imageAlt:
            "Someone's hands with bright coral nail varnish crossed over each other on a beach towel.",
          imageUri:
            '/image-library/blog-images/beach-towel-hands.x6bc859e5.png',
          _pagePosition: 0,
          title: 'The best plants for looking after your skin',
          type: 'blog',
        },
        {
          readTime: '3 min',
          _pageIndex: 0,
          uri: '/blog/why-plants-are-good-for-your-mental-health',
          text: 'There’s plenty of research to suggest that indoor plants can improve our mental wellbeing and improve physical human health ...',
          imageAlt:
            'An illustration of a man sat at a desk with a large plant nearby. ',
          imageUri: `${imageHost}/image-library/blog-images/man-at-desk.x632fd3f2.png`,
          _pagePosition: 1,
          title: 'Why plants are good for your mental health',
          type: 'blog',
        },
        {
          readTime: '2 min',
          _pageIndex: 0,
          uri: '/blog/5-ways-to-keep-your-plants-happy-this-winter',
          text: 'Here are our top 5 plants that are non-toxic for your furry best friend, but are still really popular houseplants.',
          imageAlt: 'An illustration of a man watering a large potted plant.',
          imageUri:
            '/image-library/blog-images/man-watering-plants.xde4b3750.png',
          _pagePosition: 2,
          title: '5 ways to keep your plants happy this winter',
          type: 'blog',
        },
        {
          readTime: '2 min',
          _pageIndex: 0,
          uri: '/blog/why-you-should-add-plants-to-your-workplace',
          text: 'Here are our top 5 plants that are non-toxic for your furry best friend, but are still really popular houseplants.',
          imageAlt: 'An illustration of a woman at a desk',
          imageUri: `${imageHost}/image-library/blog-images/woman-at-desk.xf703ec7a.png`,
          _pagePosition: 3,
          title: 'Why you should add plants to your workplace',
          type: 'blog',
        },
        {
          readTime: '2 min',
          _pageIndex: 0,
          uri: '/blog/top-5-dog-friendly-plants-you-need-right-now',
          text: 'Here are our top 5 plants that are non-toxic for your furry best friend, but are still really popular houseplants.',
          imageAlt:
            'A young dog sat on a dog bed with a plant in the background. ',
          imageUri: `${imageHost}/image-library/blog-images/dog-on-cushion.x6ea4705c.jpg`,
          _pagePosition: 4,
          title: 'Top 5 dog-friendly plants you need right now',
          type: 'blog',
        },
        {
          readTime: '2 min',
          _pageIndex: 0,
          uri: '/blog/how-to-look-after-your-plants-when-youre-going-on-holiday-copy',
          text: 'Here are our top 5 plants that are non-toxic for your furry best friend, but are still really popular houseplants.',
          imageAlt: 'An illustration of a woman watering a flower bed.',
          imageUri:
            '/image-library/blog-images/woman-watering-plants.x2b4add41.png',
          _pagePosition: 5,
          title: "How to look after your plants when you're going on holiday",
          type: 'blog',
        },
        {
          readTime: '2 min',
          _pageIndex: 0,
          uri: '/blog/the-best-houseplants-for-your-bathroom',
          text: 'Here are our top 5 plants that are non-toxic for your furry best friend, but are still really popular houseplants.',
          imageAlt: 'Plant in a home',
          imageUri: `${imageHost}/image-library/blog-images/plant-in-home.xdac77836.png`,
          _pagePosition: 6,
          title: 'The best houseplants for your bathroom',
          type: 'blog',
        },
      ],
      queryParams: {
        loadMorePaging: true,
        contentTypeIds: ['blogPost'],
        fields: [
          'entryTitle',
          'sys.contentTypeId',
          'sys.slug',
          'sys.uri',
          'sys.version.published',
          'summary',
          'kicker',
          'primaryImage',
          'sys.version.published',
          'postBody',
        ],
        pageSize: 10,
        weightedSearchFields: [
          {
            fieldId: 'entryTitle',
            weight: 100,
          },
          {
            fieldId: 'entryDescription',
            weight: 50,
          },
          {
            fieldId: 'searchContent',
            weight: 10,
          },
          {
            fieldId: 'pageMetadata.metaDescription',
            weight: 50,
          },
        ],
      },
      filters: {
        category: {
          title: 'Browse by category',
          contentTypeId: 'category',
          fieldId: 'category.sys.id',
          isSingleSelect: true,
          items: [
            {
              contentTypeId: 'category',
              title: 'Care advice',
              key: '72e29bcc-5f26-429b-a56a-0944a80eafdf',
              path: 'category-1',
              isSelected: false,
            },
            {
              contentTypeId: 'category',
              title: 'Choosing plants',
              key: '919b2c36-e957-494e-85f1-21714f0854cf',
              path: 'category-2',
              isSelected: false,
            },
            {
              contentTypeId: 'category',
              title: 'Health',
              key: 'b27dcc6a-644b-4dc0-923c-bca9d0210b80',
              path: 'health',
              isSelected: false,
            },
          ],
          isLoading: false,
          isError: false,
        },
        author: {
          title: 'Browse by author',
          contentTypeId: 'person',
          fieldId: 'author.sys.id',
          isSingleSelect: true,
          items: [
            {
              contentTypeId: 'person',
              title: 'Alfonso Dias',
              key: 'f0b53de0-e264-4cf6-8c30-aa1ec813fdf3',
              path: 'alfonso-dias',
              isSelected: false,
            },
            {
              contentTypeId: 'person',
              title: 'Ava McLean',
              key: 'b6cdfbf1-4f71-49e0-9e25-6a203aab7ed6',
              path: 'ava-mclean',
              isSelected: false,
            },
            {
              contentTypeId: 'person',
              title: 'Jane Garcia',
              key: '80d58a5c-e87b-46f3-b822-e10af6daeacd',
              path: 'jane-smith',
              isSelected: false,
            },
            {
              contentTypeId: 'person',
              title: 'Joe Peters',
              key: 'bb88b457-60dd-4359-a865-161f0822575b',
              path: 'joe-peters',
              isSelected: false,
            },
            {
              contentTypeId: 'person',
              title: 'John Smith',
              key: '192c2ed9-0394-458e-bc37-4555b2da7744',
              path: 'john-smith',
              isSelected: false,
            },
            {
              contentTypeId: 'person',
              title: 'Maria Petrovs',
              key: '287bb50b-2b86-4c37-8602-ea011cf6f70f',
              path: 'maria-petrovs',
              isSelected: false,
            },
            {
              contentTypeId: 'person',
              title: 'Marley Phillips',
              key: '06f512e7-347d-4b03-9c4a-f1eed6abe391',
              path: 'marley-phillips',
              isSelected: false,
            },
          ],
          isLoading: false,
          isError: false,
        },
      },
      queryDuration: 16.299999997019768,
      pagingInfo: {
        isLoading: false,
        pageCount: 1,
        totalCount: 7,
        pageSize: 10,
        pageIndex: 0,
        pagesLoaded: [0],
        prevPageIndex: 0,
      },
      projectId: '',
      preloaded: false,
    },
    product: {
      title: 'Product',
      featuredEntries: {
        isLoading: false,
        isError: false,
      },
      featuredResults: [],
      entries: {
        isLoading: false,
        isError: false,
      },
      results: [
        {
          _pageIndex: 0,
          productType: 'Foliage',
          price: [6.99, 12.99],
          ctaLink: '/products/plant/spider-plant',
          isRenderedAsLink: true,
          uri: '/products/plant/spider-plant',
          text: "Breathe easy with help from a spider plant, or chlorophytum comosum – a classic air-filtering houseplant that's easy to grow...",
          imageAlt: 'A spider plant in a white pot on a blue desk.',
          isPromoted: [],
          imageUri:
            '/image-library/product-images/plant-images/spider-plant-on-table.x01542d01.jpg',
          _pagePosition: 0,
          title: 'Spider plant',
          type: 'product',
          ctaText: 'Find out more',
        },
        {
          _pageIndex: 0,
          productType: 'Foliage',
          price: [23.99],
          ctaLink: '/products/plant/swiss-cheese-plant',
          isRenderedAsLink: true,
          uri: '/products/plant/swiss-cheese-plant',
          text: 'Bring laid-back central American vibes into your home with a monstera deliciosa, or Swiss cheese plant. This delicious monst...',
          imageAlt:
            'A pair of Swiss cheese plants in a brightly lit room with mid-century furniture. ',
          isPromoted: [],
          imageUri:
            '/image-library/product-images/plant-images/two-swiss-cheese-plants-in-room.x3a00f80a.jpg',
          _pagePosition: 1,
          title: 'Swiss cheese plant',
          type: 'product',
          ctaText: 'Find out more',
        },
        {
          _pageIndex: 0,
          productType: 'Succulents',
          price: [17.99],
          ctaLink: '/products/plant/snake-plant',
          isRenderedAsLink: true,
          uri: '/products/plant/snake-plant',
          text: "Snake plants are a great choice for beginners or those with less than green fingers. They're easy to care for, happily toler...",
          imageAlt:
            'A pair of variegated snake plants in white pots on a table next to a sofa. ',
          isPromoted: [],
          imageUri:
            '/image-library/product-images/plant-images/pair-of-snake-plants.x55c9dd5f.jpg',
          _pagePosition: 2,
          title: 'Variegated snake plant',
          type: 'product',
          ctaText: 'Find out more',
        },
        {
          _pageIndex: 0,
          price: [14.99],
          ctaLink: '/products/pot/gra-small-grey-pot',
          isRenderedAsLink: true,
          uri: '/products/pot/gra-small-grey-pot',
          text: 'Grå is a small grey concrete pot that gives foliage plants an architectural look.',
          imageAlt:
            'A small grey cylindrical pot containing a succulent plant. ',
          isPromoted: [false],
          imageUri:
            '/image-library/product-images/pot-images/gra-pot.x9a94e535.jpg?w=400&h=280',
          _pagePosition: 3,
          title: 'Grå small grey pot',
          type: 'product',
          ctaText: 'Find out more',
        },
        {
          _pageIndex: 0,
          productType: 'Foliage',
          price: [49.99, 13.99],
          ctaLink: '/products/plant/dracaena-fragrans',
          isRenderedAsLink: true,
          uri: '/products/plant/dracaena-fragrans',
          text: "A great option for beginner plant parents, this air purifying shrub will grow in a wide range of conditions. In fact, it's o...",
          imageAlt: 'A multi-stemmed dracaena fragrans.',
          isPromoted: [],
          imageUri:
            '/image-library/product-images/plant-images/dracaena-next-to-sofa.x3f509d47.jpg',
          _pagePosition: 4,
          title: 'Dracaena fragrans',
          type: 'product',
          ctaText: 'Find out more',
        },
        {
          _pageIndex: 0,
          productType: 'Foliage',
          price: [8.99, 44.99],
          ctaLink: '/products/plant/peace-lily',
          isRenderedAsLink: true,
          uri: '/products/plant/peace-lily',
          text: 'A classic choice for adding a touch of understated elegance to a home, the peace lily is one of the most popular plants we s...',
          imageAlt: 'A peace lily plant in a room. ',
          isPromoted: [],
          imageUri:
            '/image-library/product-images/plant-images/peace-lily-room.xe600292d.jpg',
          _pagePosition: 5,
          title: 'Peace lily',
          type: 'product',
          ctaText: 'Find out more',
        },
        {
          _pageIndex: 0,
          productType: 'Succulents',
          price: [9.99, 24.99],
          ctaLink: '/products/plant/aloe-vera',
          isRenderedAsLink: true,
          uri: '/products/plant/aloe-vera',
          text: 'Every kitchen should have an aloe vera plant. Well known for its amazing ability to soothe and heal burns, this amazing plan...',
          imageAlt: 'An Aloe vera plant in a gold pot.',
          isPromoted: [false],
          imageUri:
            '/image-library/product-images/plant-images/aloe-vera-gold-pot.x3d75c7a2.jpg?w=400&h=280',
          _pagePosition: 6,
          title: 'Aloe vera',
          type: 'product',
          ctaText: 'Find out more',
        },
        {
          _pageIndex: 0,
          productType: 'Ferns',
          price: [11.99],
          ctaLink: '/products/plant/maidenhair-fern',
          isRenderedAsLink: true,
          uri: '/products/plant/maidenhair-fern',
          text: 'Easily identified by its bright green and delicate leaves, the maidenhead fern thrives in wet environments – making it an id...',
          imageAlt: 'A person misting a maidenhead fern plant.',
          isPromoted: [],
          imageUri:
            '/image-library/product-images/plant-images/person-misting-maidenhead-fern.x2f01470f.jpg',
          _pagePosition: 7,
          title: 'Maidenhair fern',
          type: 'product',
          ctaText: 'Find out more',
        },
        {
          _pageIndex: 0,
          productType: 'Foliage',
          price: [14.99],
          ctaLink: '/products/plant/elephants-ear',
          isRenderedAsLink: true,
          uri: '/products/plant/elephants-ear',
          text: 'Elephant ear plants are a great way to introduce lush and exotic looking foliage to your home. There are several different s...',
          imageAlt: "An elephant's ear plant in a terracotta pot. ",
          isPromoted: [],
          imageUri:
            '/image-library/product-images/plant-images/elephants-ear-and-pots.x92fd10eb.jpg',
          _pagePosition: 8,
          title: 'Elephant ear',
          type: 'product',
          ctaText: 'Find out more',
        },
        {
          _pageIndex: 0,
          productType: 'Foliage',
          price: [17.99],
          ctaLink: '/products/plant/chinese-evergreen',
          isRenderedAsLink: true,
          uri: '/products/plant/chinese-evergreen',
          text: 'Easy to care for and air purifying, the Chinese Evergreen or aglaonema makes a great low maintenance houseplant. The aglaone...',
          imageAlt:
            'A close-up of a Chinese evergreen plant in a room of other plants. ',
          isPromoted: [],
          imageUri:
            '/image-library/product-images/plant-images/chinese-evergreen-room.xbe410c9a.jpg',
          _pagePosition: 9,
          title: 'Chinese evergreen',
          type: 'product',
          ctaText: 'Find out more',
        },
      ],
      queryParams: {
        loadMorePaging: true,
        contentTypeIds: ['plant', 'pot'],
        fields: [
          'entryTitle',
          'sys.contentTypeId',
          'sys.slug',
          'sys.uri',
          'sys.version.published',
          'primaryImage',
          'tags',
          'productName',
          'description',
          'type',
          'plantVariant',
          'potVariant',
        ],
        pageSize: 10,
        weightedSearchFields: [
          {
            fieldId: 'entryTitle',
            weight: 100,
          },
          {
            fieldId: 'entryDescription',
            weight: 50,
          },
          {
            fieldId: 'searchContent',
            weight: 10,
          },
          {
            fieldId: 'pageMetadata.metaDescription',
            weight: 50,
          },
        ],
      },
      filters: {
        contentTypeId: {
          title: 'Browse product types',
          contentTypeId: ['pot', 'plant'],
          fieldId: 'sys.contentTypeId',
          isSingleSelect: true,
          items: [
            {
              key: 'pot',
              title: 'Pot',
            },
            {
              key: 'plant',
              title: 'Plant',
            },
          ],
        },
        plantType: {
          title: 'Browse plant types',
          contentTypeId: 'plantType',
          fieldId: 'type.sys.id',
          isSingleSelect: true,
          items: [],
        },
        colour: {
          title: 'Browse by colour',
          contentTypeId: 'pot',
          fieldId: 'colour',
          isSingleSelect: true,
          items: [
            {
              key: 'white',
              title: 'White',
            },
            {
              key: 'grey',
              title: 'Grey',
            },
            {
              key: 'brown',
              title: 'Brown',
            },
          ],
        },
        potSize: {
          title: 'Browse by pot size',
          contentTypeId: 'pot',
          fieldId: 'potVariant.internalDiameterCM',
          isSingleSelect: true,
          fieldOperator: 'between',
          items: [
            {
              key: '5-15',
              title: 'Small',
            },
            {
              key: '16-25',
              title: 'Medium',
            },
            {
              key: '26-2000000',
              title: 'Large',
            },
          ],
        },
        plantSize: {
          title: 'Browse by plant size',
          contentTypeId: 'plant',
          fieldId: 'plantVariant.heightCM',
          isSingleSelect: true,
          fieldOperator: 'between',
          items: [
            {
              key: '0-30',
              title: 'Small',
            },
            {
              key: '31-60',
              title: 'Medium',
            },
            {
              key: '61-2000000',
              title: 'Large',
            },
          ],
        },
      },
      queryDuration: 16.100000001490116,
      pagingInfo: {
        isLoading: false,
        pageCount: 3,
        totalCount: 22,
        pageSize: 10,
        pageIndex: 0,
        pagesLoaded: [0],
        prevPageIndex: 0,
      },
      projectId: '',
      preloaded: false,
    },
  },
  resultsInfo: {
    hasLoadMore: true,
    hasResults: true,
    noResultsText: {
      title: 'Sorry, nothing matches your search',
      text: 'Try resetting any filters, checking for typos, or adjusting your search term.',
    },
    resultsText: "Showing 1-20 of 37 results for 'plants'.",
  },
  searchTerm: 'plants',
};
