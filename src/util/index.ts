// Get px with the size
export function size(size: string) {

    size = size.toLowerCase();

    switch(size) {
        case 's': 
            return '32px';

        case 'm':
            return '44px';

        case 'l':
            return '52px';
    }
}

// Get font-size from size
export function fontSize(size: string) {
    size = size.toLowerCase();

    switch(size) {
        case 's': 
            return '14px';

        case 'm':
            return '16px';

        case 'l':
            return '16px';
    }
}

// Get default rounded
export function rounded(boolean: boolean) {
    if(boolean) return '20px';
    
    return 'none';
}

// Get padding from size
export function padding(size: string) {
    size = size.toLowerCase();

    switch(size) {
        case 's': 
            return '0 16px';

        case 'm':
            return '0 24px';

        case 'l':
            return '0 32px';
    }
}

// Get height from size
export function height(size: string) {
    size = size.toLowerCase();

    switch(size) {
        case 's': 
            return '32px';

        case 'm':
            return '44px';

        case 'l':
            return '52px';
    }
}