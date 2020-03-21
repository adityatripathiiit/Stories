const stories = [
  {
    username: 'Times Of India',
    title: 'YESTERDAY\'S NEWS ',
    profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSA-uP2BqDHdnvYWwC18_WfH0mHEXDsOs4oUx_RsTXBin69GC4y',
    stories: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1521716250348-c4ae4ff1df43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80',
        type: 'image',
        duration: 5,
        isReadMore: true,
      },
    ],
  },
  {
    username: 'Hindustan Times',
    profile: 'data:image/png;base64,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',
    title: 'TODAY\'S NEWS',
    stories: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        type: 'image',
        duration: 5,
        isReadMore: true,
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1476292026003-1df8db2694b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        type: 'image',
        duration: 5,
        isSeen: false,
        isReadMore: true,
        isPaused: true,
      },
    ],
  },
];

export default stories;
