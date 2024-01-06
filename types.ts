type Block = {
    id: string,
    windth: number,
    height: number
}

type Chars = {
    value: string,
    fontSize: number,
    fontFamily: string,
    color: string,
    bold: boolean
}

type TextBlock = Block & {
    type: 'text', 
    chars: Array<Chars>
}

type ImageBlock = Block & {
    type: 'image',
    data: string
}

type ArtObject = Block & {
    type: 'ArtObject',
    data: string
}


type Filter = {
    color: string
}

type Canvas = {
    wight: number,
    height: number,
    elements: Array<TextBlock | ImageBlock | ArtObject>
}


type Export = {
    canvas: Array<Canvas>
}



type Commands = {
    name: string,
    id: string
}


type HistoryBlocks = {
    history: Array<Canvas>
}

