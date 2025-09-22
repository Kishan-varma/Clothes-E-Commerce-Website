function selectSize(button) {
    // Remove the "selected" class from all size buttons
    const allButtons = document.querySelectorAll('.size-option');
    allButtons.forEach(btn => btn.classList.remove('selected'));

    // Add the "selected" class to the clicked button
    button.classList.add('selected');
}



const products = [
    {
        id: "s1",
        name: "Mens-Top Shirts Red",
        price: "₹700",
        description: "Add a pop of color to your wardrobe with this red casual shirt. Featuring a spread neckline and regular fit, this solid-colored piece is perfect for laid-back days.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Red" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Slim Straight Fit" },
            { label: "Neck", value: "Polo Neck" }
        ],
        rating: 4.5,
        imageUrl: "images/mshirt/s1.jpg"
    },
    {
        id: "s2",
        name: "Mens-Top Shirts Brown",
        price: "₹750",
        description: "Embrace floral charm with this maroon casual shirt. Its classic neckline and regular fit provide comfort and style. The vibrant pattern adds a touch of elegance to your everyday outfits.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Brown" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Slim Straight Fit" },
            { label: "Neck", value: "Polo Neck" }
        ],
        rating: 4,
        imageUrl: "images/mshirt/s2.jpg"
    },
    {
        id: "s3",
        name: "Mens-Top Shirts Dark Blue",
        price: "₹800",
        description: "Channel a cool, casual vibe with this dark blue denim shirt. Its spread neckline and solid pattern create a timeless look that pairs well with various outfits.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Blue" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Slim Straight Fit" },
            { label: "Neck", value: "Polo Neck" }
        ],
        rating: 4.5,
        imageUrl: "images/mshirt/s3.jpg"
    },
    {
        id: "s4",
        name: "Mens-Top Shirts Deep Ocean",
        price: "₹700",
        description: "Add a pop of color to your wardrobe with this red casual shirt. Featuring a spread neckline and regular fit, this solid-colored piece is perfect for laid-back days.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Red" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Slim Straight Fit" },
            { label: "Neck", value: "Polo Neck" }
        ],
        rating: 4.5,
        imageUrl: "images/mshirt/s4.jpg"
    },
    {
        id: "s5",
        name: "Mens-Top Shirts Navy",
        price: "₹600",
        description: "Mens-Top Shirts SHORT SLV 100% VISCOSE SLIM FIT RESORT COLLAR NAVY",
        sizes: ["S", "M", "L", "XL"],      
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Navy" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Slim Straight Fit" },
            { label: "Neck", value: "Polo Neck" }
        ],
        rating: 4.5,
        imageUrl: "images/mshirt/s5.jpg"
    },
    {
        id: "s6",
        name: "Mens-Top Shirts Pista",
        price: "₹650",
        description: "Look sharp in this sage shirt with a classic neckline. The regular fit and solid pattern make it perfect for casual occasions. This versatile piece effortlessly elevates your everyday style.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Light Green" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Slim Straight Fit" },
            { label: "Neck", value: "Polo Neck" }
        ],
        rating: 4.5,
        imageUrl: "images/mshirt/s6.jpg"
    },
    {
        id: "s7",
        name: "Mens-Top Shirts White",
        price: "₹700",
        description: "Elevate your casual wardrobe with this crisp white shirt. Featuring a spread neckline and regular fit, it's a timeless piece that offers both comfort and style for your everyday adventures.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "White" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Slim Straight Fit" },
            { label: "Neck", value: "Polo Neck" }
        ],
        rating: 4.5,
        imageUrl: "images/mshirt/s7.jpg"
    },
    {
        id: "s8",
        name: "Mens-Top Shirts Black",
        price: "₹750",
        description: "Add a touch of sophistication to your casual look with this black shirt. Its spread collar and solid pattern make it a versatile piece. Pair it with jeans for a smart-casual ensemble.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Black" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Slim Straight Fit" },
            { label: "Neck", value: "Polo Neck" }
        ],
        rating: 4.5,
        imageUrl: "images/mshirt/s8.jpg"
    },
    {
        id: "s9",
        name: "Mens-Top Shirts Sand",
        price: "₹850",
        description: "Add a touch of sophistication to your casual wardrobe with this off-white shirt. The vertical stripes and spread neckline create a stylish look. Perfect for a relaxed yet put-together appearance.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Beige" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Slim Straight Fit" },
            { label: "Neck", value: "Polo Neck" }
        ],
        rating: 4.5,
        imageUrl: "images/mshirt/s9.jpg"
    },
    {
        id: "s10",
        name: "Mens-Top Shirts Multicolor",
        price: "₹700",
        description: "Mens-Top Shirts LONG SLEEVE 100% COTTON SLIM FIT NORMAL 2PC COLLAR WHITE/NAVY",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Multicolor" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Slim Straight Fit" },
            { label: "Neck", value: "Polo Neck" }
        ],
        rating: 4.5,
        imageUrl: "images/mshirt/s10.jpg"
    },
    {
        id: "s11",
        name: "Mens-Top Shirts Deep Teal",
        price: "₹750",
        description: "Add a touch of sophistication to your casual wardrobe with this off-white shirt. The vertical stripes and spread neckline create a stylish look. Perfect for a relaxed yet put-together appearance.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Dark Green" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Slim Straight Fit" },
            { label: "Neck", value: "Polo Neck" }
        ],
        rating: 4.5,
        imageUrl: "images/mshirt/s11.jpg"
    },
    {
        id: "s12",
        name: "Mens-Top Shirts Blue",
        price: "₹800",
        description: "Express your artistic side with this multi-colored shirt featuring an abstract pattern. The classic collar and regular fit create a versatile piece for casual occasions. Stand out in style.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Blue" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Slim Straight Fit" },
            { label: "Neck", value: "Polo Neck" }
        ],
        rating: 4.5,
        imageUrl: "images/mshirt/s12.jpg"
    },
    {
        id: "s13",
        name: "Mens-Top Shirts White",
        price: "₹700",
        description: "Bring a tropical vibe to your outfit with this light green shirt. Its leaf print and camp neckline create a fun, casual look. The regular fit ensures comfort, making it perfect for summer outings or vacation wear.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "White" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Slim Straight Fit" },
            { label: "Neck", value: "Polo Neck" }
        ],
        rating: 4.5,
        imageUrl: "images/mshirt/s13.jpg"
    },
    {
        id: "s14",
        name: "Men Slim Fit Shirts-White/Pink",
        price: "₹600",
        description: "Men Slim Fit Shirts-White/Pink",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "White" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Slim Straight Fit" },
            { label: "Neck", value: "Polo Neck" }
        ],
        rating: 4.5,
        imageUrl: "images/mshirt/s14.jpg"
    },
    {
        id: "s15",
        name: "Mens-Top Shirts Red",
        price: "₹650",
        description: "Stay cozy and stylish in this red flannel shirt. The classic neckline and check pattern add a timeless touch. Perfect for casual occasions, this shirt combines comfort and style. Embrace the laid-back vibe with this versatile piece",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Red" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Slim Straight Fit" },
            { label: "Neck", value: "Polo Neck" }
        ],
        rating: 4.5,
        imageUrl: "images/mshirt/s15.jpg"
    },
    {
        id: "s16",
        name: "Mens-Top Shirts Beige",
        price: "₹700",
        description: "Add a touch of summer to your wardrobe with this off-white shirt. The vertical stripes and camp neckline create a breezy, casual look. It's perfect for sunny days and relaxed outings",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Beige" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Slim Straight Fit" },
            { label: "Neck", value: "Polo Neck" }
        ],
        rating: 4.5,
        imageUrl: "images/mshirt/s16.jpg"
    },
    {
        id: "s17",
        name: "Mens-Top Shirts Brown",
        price: "₹750",
        description: "Add a touch of artistry to your wardrobe with this brown shirt. Its abstract pattern and classic neckline create a unique look for casual occasions. The regular fit ensures comfort throughout the day.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Brown" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Slim Straight Fit" },
            { label: "Neck", value: "Polo Neck" }
        ],
        rating: 4.5,
        imageUrl: "images/mshirt/s17.jpg"
    },
    {
        id: "s18",
        name: "Mens-Top Shirts Grey",
        price: "₹850",
        description: "Add sophistication to your casual wardrobe with this grey shirt. The solid pattern and spread neckline create a sleek look, while the regular fit ensures comfort. Perfect for a relaxed day out or a casual meetup with friends.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Grey" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Slim Straight Fit" },
            { label: "Neck", value: "Polo Neck" }
        ],
        rating: 4.5,
        imageUrl: "images/mshirt/s18.jpg"
    },
    //tshirt section
    {
        id: "s19",
        name: "Mens-Top Polo Neck Black",
        price: "₹700",
        description: "Exude confidence in this black polo t-shirt. The solid pattern and polo neckline create a sleek, casual look. This t-shirt is perfect for effortless style, offering versatility and comfort for your everyday adventures.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Black" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Regular Fit" },
            { label: "Neck", value: "Polo Neck" }
        ],
        rating: 4.5,
        imageUrl: "images/mtshirt/t1.jpg"
    },
    {
        id: "s20",
        name: "Mens-Top Crew Neck White",
        price: "₹750",
        description: "Stay cozy in this white pullover sweater. Its crew neckline and solid design make it a versatile casual piece. Layer it over your favorite outfits for a warm and stylish look.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "White" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Regular Fit" },
            { label: "Neck", value: "Crew Neck" }
        ],
        rating: 4.5,
        imageUrl: "images/mtshirt/t2.jpg"
    },
    {
        id: "s21",
        name: "Mens-Top Polo Neck Black/White",
        price: "₹800",
        description: "Mens-Top Polo Neck Black Knitted Regular Fit",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Black" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Regular Fit" },
            { label: "Neck", value: "Polo Neck" }
        ],
        rating: 4.5,
        imageUrl: "images/mtshirt/t3.jpg"
    },
    {
        id: "s22",
        name: "Men T-Shirts-Black",
        price: "₹700",
        description: " FreshFits Men T-Shirts-Black.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Black" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Regular Fit" },
            { label: "Neck", value: "Crew Neck" }
        ],
        rating: 4.5,
        imageUrl: "images/mtshirt/t4.jpg"
    },
    {
        id: "s23",
        name: "Mens-Top Polo Neck Navy",
        price: "₹600",
        description: "Stay cozy and stylish in this navy pullover sweater. The spread neckline and color-block pattern create a trendy casual look. Perfect for cooler days, it combines comfort and fashion effortlessly.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Dark Blue" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Regular Fit" },
            { label: "Neck", value: "Polo Neck" }
        ],
        rating: 4.5,
        imageUrl: "images/mtshirt/t5.jpg"
    },
    {
        id: "s24",
        name: "Mens-Top Polo Neck Olive",
        price: "₹650",
        description: "Add warmth to your casual wardrobe with this olive pullover sweater. The geometric pattern and spread neckline offer a stylish twist.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Dark Green" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Regular Fit" },
            { label: "Neck", value: "Polo Neck" }
        ],
        rating: 4.5,
        imageUrl: "images/mtshirt/t6.jpg"
    },
    {
        id: "s25",
        name: "Mens-Top Hoody Cement",
        price: "₹700",
        description: "Stay cozy and stylish in this casual beige hoodie. The numeric pattern adds a unique twist to this comfortable sweatshirt. Perfect for lazy days or running errands, it's your new go-to piece!",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Grey" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Regular Fit" },
            { label: "Neck", value: "Hoody Neck" }
        ],
        rating: 4.5,
        imageUrl: "images/mtshirt/t7.jpg"
    },
    {
        id: "s26",
        name: "Mens-Top Sweatshirt Ocean Green",
        price: "₹750",
        description: "Add a pop of color to your casual wardrobe with this mint sweatshirt. Featuring a letter pattern and crew neckline, it offers a playful yet comfortable look. The regular fit ensures ease of movement. Pair it with jeans or leggings for a stylish and cozy outfit.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Green" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Regular Fit" },
            { label: "Neck", value: "Crew Neck" }
        ],
        rating: 4.5,
        imageUrl: "images/mtshirt/t8.jpg"
    },
    {
        id: "s27",
        name: "Mens-Top Sweatshirt Black",
        price: "₹850",
        description: "Stay cozy and stylish in this black sweatshirt. The solid pattern and crew neckline offer a classic look, while the regular fit ensures comfort. Perfect for casual days or lounging at home.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Black" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Regular Fit" },
            { label: "Neck", value: "Crew Neck" }
        ],
        rating: 4.5,
        imageUrl: "images/mtshirt/t9.jpg"
    },
    {
        id: "s28",
        name: "Mens-Top Sweatshirt Acru Melange",
        price: "₹700",
        description: "Stay cozy and stylish in this white sweatshirt with letter pattern. Its baseball neckline and regular fit make it perfect for casual days when comfort is key.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Grey" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Regular Fit" },
            { label: "Neck", value: "High Neck" }
        ],
        rating: 4.5,
        imageUrl: "images/mtshirt/t10.jpg"
    },
    {
        id: "s29",
        name: "Men Sweatshirt-White",
        price: "₹750",
        description: "FreshFits Men Sweatshirt-White",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "White" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Regular Fit" },
            { label: "Neck", value: "Crew Neck" }
        ],
        rating: 4.5,
        imageUrl: "images/mtshirt/t11.jpg"
    },
    {
        id: "s30",
        name: "Mens-Top Sweatshirt Coffee/Black",
        price: "₹800",
        description: "FreshFits Sweatshirt Coffee/Black",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Black" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Regular Fit" },
            { label: "Neck", value: "High Neck" }
        ],
        rating: 4.5,
        imageUrl: "images/mtshirt/t12.jpg"
    },
    {
        id: "s31",
        name: "Mens-Top Hoody Olive & Ecru",
        price: "₹700",
        description: "Stay cozy and stylish in this black color-block hoodie. The hooded neckline adds extra warmth, while the unique design brings a trendy edge to your casual outfits. Perfect for laid-back days or light workouts.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Dark Green" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Regular Fit" },
            { label: "Neck", value: "Hoody Neck" }
        ],
        rating: 4.5,
        imageUrl: "images/mtshirt/t13.jpg"
    },
    {
        id: "s32",
        name: "Mens-Top Crew Neck Black",
        price: "₹600",
        description: "Make a statement with this black T-shirt featuring a letter pattern. The crew neckline adds a classic touch to this regular fit tee. Perfect for casual outings, it's a stylish choice that effortlessly blends comfort and self-expression.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Black" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Regular Fit" },
            { label: "Neck", value: "Crew Neck" }
        ],
        rating: 4.5,
        imageUrl: "images/mtshirt/t14.jpg"
    },
    {
        id: "s33",
        name: "Mens-Top Polo Neck Deep Emerald",
        price: "₹650",
        description: "Add a pop of color to your wardrobe with this teal polo T-shirt. The solid pattern and classic polo neckline create a stylish yet casual look. Perfect for everyday wear!",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Dark Green" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Regular Fit" },
            { label: "Neck", value: "Polo Neck" }
        ],
        rating: 4.5,
        imageUrl: "images/mtshirt/t15.jpg"
    },
    {
        id: "s34",
        name: "Mens-Top Polo Neck Dusty Pink",
        price: "₹700",
        description: "This light pink polo t-shirt is a charming choice for casual wear. The classic polo neckline and solid color create a timeless look. Its regular fit ensures comfort throughout the day.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Pink" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Regular Fit" },
            { label: "Neck", value: "Polo Neck" }
        ],
        rating: 4.5,
        imageUrl: "images/mtshirt/t16.jpg"
    },
    {
        id: "s35",
        name: "Mens-Top Polo Neck Rust",
        price: "₹750",
        description: "Elevate your casual look with this rust-colored polo T-shirt. Its solid pattern and classic polo neckline offer a timeless appeal. Perfect for a relaxed day out or a casual meet-up with friends.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Orange" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Regular Fit" },
            { label: "Neck", value: "Polo Neck" }
        ],
        rating: 4.5,
        imageUrl: "images/mtshirt/t17.jpg"
    },
    {
        id: "s36",
        name: "Mens-Top Crew Neck Silver/Navy",
        price: "₹850",
        description: "Rock a timeless look with these black jeans. The mid-rise waist and regular fit ensure all-day comfort. These solid-colored denim pants are perfect for any casual occasion.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Dark Blue" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Regular Fit" },
            { label: "Neck", value: "Crew Neck" }
        ],
        rating: 4.5,
        imageUrl: "images/mtshirt/t18.jpg"
    },
    {
        id: "s37",
        name: "Mens-Bottom Denim Black Tone",
        price: "₹850",
        description: "Mens-Top Crew Neck Navy /Snow White 130 Gsm Poly Aero / Poly Microrice Knit Easy Fit Crew Neck Short Slv",
        sizes: ["28", "30", "32", "34","36"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Black" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Straight fit" },
            { label: "Neck", value: "None" }
        ],
        rating: 4.5,
        imageUrl: "images/mjeans/j1.jpg"
    },
    {
        id: "s38",
        name: "Mens-Bottom Denim Dark Tone",
        price: "₹800",
        description: "Embrace timeless style with these dark blue jeans. The solid pattern and mid-rise waist offer a flattering fit, while the regular cut ensures comfort. Perfect for casual everyday wear.",
        sizes: ["28", "30", "32", "34","36"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Dark Blue" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Slim Fit" },
            { label: "Neck", value: "None" }
        ],
        rating: 4.5,
        imageUrl: "images/mjeans/j2.jpg"
    },
    {
        id: "s39",
        name: "Mens-Bottom Denim Grey Tone",
        price: "₹900",
        description: "Stand out in these charcoal grey cargo jeans. With a mid-rise waist and solid pattern, they're perfect for casual adventures. Multiple pockets add functionality to your style.",
        sizes: ["28", "30", "32", "34","36"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Grey" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Anti Fit" },
            { label: "Neck", value: "None" }
        ],
        rating: 4.5,
        imageUrl: "images/mjeans/j3.jpg"
    },
    {
        id: "s40",
        name: "Mens-Bottom Denim Navy Straight-Fit",
        price: "₹850",
        description: "Upgrade your denim collection with these navy jeans. The mid-rise waist and regular fit offer comfort for casual occasions. The solid pattern ensures versatility, making these jeans a staple for any outfit.",
        sizes: ["28", "30", "32", "34","36"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Dark Blue" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Straight Fit" },
            { label: "Neck", value: "None" }
        ],
        rating: 4.5,
        imageUrl: "images/mjeans/j4.jpg"
    },
    {
        id: "s41",
        name: "Mens-Bottom Denim Black Tone Bootcut-Fit",
        price: "₹900",
        description: "Classic black jeans with a solid pattern and mid-rise waist, perfect for casual occasions. The regular fit ensures comfort and style.",
        sizes: ["28", "30", "32", "34","36"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Black" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Bootcut Fit" },
            { label: "Neck", value: "None" }
        ],
        rating: 4.5,
        imageUrl: "images/mjeans/j5.jpg"
    },
    {
        id: "s42",
        name: "Mens-Bottom Denim Dark Tone Cropped-Fit",
        price: "₹1000",
        description: "These dark blue jeans are a wardrobe essential. With a mid-rise waist and regular fit, they're perfect for casual occasions. The solid color makes them easy to style with any top.",
        sizes: ["28", "30", "32", "34","36"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Dark Blue" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Cropped Fit" },
            { label: "Neck", value: "None" }
        ],
        rating: 4.5,
        imageUrl: "images/mjeans/j6.jpg"
    },
    {
        id: "s43",
        name: "Mens-Bottom Denim Dark Tone Slim-Fit",
        price: "₹950",
        description: "Enhance your denim collection with these dark-blue jeans. The mid-rise waist and regular fit provide comfort and style. Perfect for casual occasions, they offer versatility in your wardrobe.",
        sizes: ["28", "30", "32", "34","36"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Dark Blue" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Slim Fit" },
            { label: "Neck", value: "None" }
        ],
        rating: 4.5,
        imageUrl: "images/mjeans/j7.jpg"
    },
    {
        id: "s44",
        name: "Mens-Bottom Denim Light Tone Slim-Fit",
        price: "₹850",
        description: "Step out in style with these light-blue mid-rise jeans. Designed for casual occasions, these solid-colored denim pants feature a regular fit that ensures all-day comfort. A versatile addition to any wardrobe, they're perfect for various outfits.",
        sizes: ["28", "30", "32", "34","36"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Light Blue" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Slim Fit" },
            { label: "Neck", value: "None" }
        ],
        rating: 4.5,
        imageUrl: "images/mjeans/j8.jpg"
    },
    {
        id: "s45",
        name: "Mens-Bottom Denim Dark Tone Straight-Fit",
        price: "₹850",
        description: "These dark blue jeans are a wardrobe staple. With a mid-rise waist and regular fit, they offer comfort for casual wear. The solid pattern ensures versatility for various outfit combinations.",
        sizes: ["28", "30", "32", "34","36"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Dark Blue" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Straight Fit" },
            { label: "Neck", value: "None" }
        ],
        rating: 4.5,
        imageUrl: "images/mjeans/j9.jpg"
    },
    {
        id: "s46",
        name: "Mens-Bottom Denim Light Tone Cropped-Fit",
        price: "₹850",
        description: "Step out in style with this light blue jean. The mid-rise waist and regular fit offer a comfortable, flattering silhouette. Perfect for casual outings and everyday wear.",
        sizes: ["28", "30", "32", "34","36"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Light Blue" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Cropped Fit" },
            { label: "Neck", value: "None" }
        ],
        rating: 4.5,
        imageUrl: "images/mjeans/j10.jpg"
    },
    {
        id: "s47",
        name: "Mens-Bottom Denim Lt.Grey Tone Cropped-Fit",
        price: "₹800",
        description: "Classic and versatile, these grey mid-rise jeans are a wardrobe essential. The solid pattern and regular fit offer timeless style for casual occasions.",
        sizes: ["28", "30", "32", "34","36"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Grey" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Cropped Fit" },
            { label: "Neck", value: "None" }
        ],
        rating: 4.5,
        imageUrl: "images/mjeans/j11.jpg"
    },
    {
        id: "s48",
        name: "Mens-Bottom Denim Ivory Slim-Fit",
        price: "₹900",
        description: "Embrace simplicity with these off-white mid-rise jeans. The solid pattern and regular fit offer versatility for casual wear. Pair with your favorite tops for a clean, effortless look.",
        sizes: ["28", "30", "32", "34","36"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Cream" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Slim Fit" },
            { label: "Neck", value: "None" }
        ],
        rating: 4.5,
        imageUrl: "images/mjeans/j12.jpg"
    },
    {
        id: "s49",
        name: "Mens-Bottom Denim Dark Tone Straight-Fit",
        price: "₹850",
        description: "Step out in style with these dark blue jeans. The mid-rise waist offers a flattering fit, while the solid pattern ensures versatility. These regular fit jeans are perfect for casual outings, easily paired with your favorite tops and shoes.",
        sizes: ["28", "30", "32", "34","36"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Blue" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Straight Fit" },
            { label: "Neck", value: "None" }
        ],
        rating: 4.5,
        imageUrl: "images/mjeans/j13.jpg"
    },
    {
        id: "s50",
        name: "Men Cropped Fit Denim-Mid Tone",
        price: "₹900",
        description: "Upgrade your denim collection with this blue mid-rise jean. Its regular fit and solid color make it perfect for casual outings. This timeless piece pairs well with any top in your wardrobe.",
        sizes: ["28", "30", "32", "34","36"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Blue" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Cropped Fit" },
            { label: "Neck", value: "None" }
        ],
        rating: 4.5,
        imageUrl: "images/mjeans/j14.jpg"
    },
    {
        id: "s51",
        name: "Mens-Bottom Denim Dark Tone Cropped-Fit",
        price: "₹1000",
        description: "Rock a timeless look with these black jeans. The mid-rise waist and regular fit offer comfort and style for casual occasions. These solid-colored jeans are a versatile addition to any wardrobe, ready to pair with your favorite tops.",
        sizes: ["28", "30", "32", "34","36"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Dark Blue" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Cropped Fit" },
            { label: "Neck", value: "None" }
        ],
        rating: 4.5,
        imageUrl: "images/mjeans/j15.jpg"
    },
    {
        id: "s52",
        name: "Mens-Bottom Denim Light Tone Anti-Fit",
        price: "₹950",
        description: "Adventure-ready light blue cargo jeans combine style and functionality. The mid-rise waist and casual design make them perfect for everyday wear. Multiple pockets add practicality to this versatile piece",
        sizes: ["28", "30", "32", "34","36"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Light Blue" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Anti Fit" },
            { label: "Neck", value: "None" }
        ],
        rating: 4.5,
        imageUrl: "images/mjeans/j16.jpg"
    },
    {
        id: "s53",
        name: "Mens-Bottom Denim Dark Tone Anti-Fit",
        price: "₹850",
        description: "Step out in style with these dark blue mid-rise jeans. The solid pattern and regular fit offer a classic look for casual occasions. Pair with any top for a timeless outfit.",
        sizes: ["28", "30", "32", "34","36"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Dark Blue" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Anti Fit" },
            { label: "Neck", value: "None" }
        ],
        rating: 4.5,
        imageUrl: "images/mjeans/j17.jpg"
    },
    {
        id: "s54",
        name: "Mens-Bottom Denim Grey Tone Bootcut-Fit",
        price: "₹850",
        description: "Upgrade your denim collection with these charcoal grey jeans. The mid-rise waist and regular fit offer comfort for casual wear. The solid pattern adds versatility, making them easy to style for various occasions.",
        sizes: ["28", "30", "32", "34","36"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Grey" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Bootcut Fit" },
            { label: "Neck", value: "None" }
        ],
        rating: 4.5,
        imageUrl: "images/mjeans/j18.jpg"
    },
    {
        id: "s55",
        name: "Womens-Top Polo Neck Snow White",
        price: "₹700",
        description: "Make a statement in this white graphic polo T-shirt. The classic polo neckline adds a touch of sophistication to your casual look. This unique tee combines comfort and style for your everyday adventures.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "White" },
            { label: "Wash Care", value: "Machine Wash" }
        ],
        rating: 4.5,
        imageUrl: "images/wtops/p1.jpg"
    },
    {
        id: "s56",
        name: "Womens-Top Crew Neck Quartz Pink",
        price: "₹650",
        description: "Embrace femininity with this light pink peplum top. The round neckline and solid pattern create a flattering silhouette, perfect for casual outings.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Pink" },
            { label: "Wash Care", value: "Machine Wash" }
        ],
        rating: 4.5,
        imageUrl: "images/wtops/p2.jpg"
    },
    {
        id: "s57",
        name: "Womens-Top Polo Neck Red Violet",
        price: "₹600",
        description: "Make a statement in this pink polo t-shirt with a graphic pattern. Its casual style and unique design add a pop of color to your wardrobe. Stand out in this eye-catching piece.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Red" },
            { label: "Wash Care", value: "Machine Wash" }
        ],
        rating: 4.5,
        imageUrl: "images/wtops/p3.jpg"
    },
    {
        id: "s58",
        name: "Crew Neck Womens Pastel Lilac",
        price: "₹550",
        description: " FreshFits Crew Neck Womens Pastel Lilac",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Purple" },
            { label: "Wash Care", value: "Machine Wash" }
        ],
        rating: 4.5,
        imageUrl: "images/wtops/p4.jpg"
    },
    {
        id: "s59",
        name: "Womens-Top Crew Neck Red",
        price: "₹600",
        description: "Make a statement in this red peplum top. Its round neckline and solid color create a stylish look for casual occasions. The unique peplum design adds a feminine touch to your outfit.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Red" },
            { label: "Wash Care", value: "Machine Wash" }
        ],
        rating: 4.5,
        imageUrl: "images/wtops/p5.jpg"
    },
    {
        id: "s60",
        name: "Crew Neck Womens Cashmere Blue",
        price: "₹650",
        description: "FreshFits Crew Neck Womens Cashmere Blue",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Blue" },
            { label: "Wash Care", value: "Machine Wash" }
        ],
        rating: 4.5,
        imageUrl: "images/wtops/p6.jpg"
    },
    {
        id: "s61",
        name: "Crew Neck Womens Pastel Lilac",
        price: "₹700",
        description: "FreshFits Crew Neck Womens Pastel Lilac.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Purple" },
            { label: "Wash Care", value: "Machine Wash" }
        ],
        rating: 4.5,
        imageUrl: "images/wtops/p7.jpg"
    },
    {
        id: "s62",
        name: "Tshirt Womens Seafoam Green",
        price: "₹650",
        description: "Tshirt Womens Seafoam Green.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Green" },
            { label: "Wash Care", value: "Machine Wash" }
        ],
        rating: 4.5,
        imageUrl: "images/wtops/p8.jpg"
    },
    {
        id: "s63",
        name: "Womens-Top Crew Neck Grey",
        price: "₹700",
        description: "Embrace sporty style with this grey track jacket. The mock neckline and solid pattern create a sleek look for casual outings.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Grey" },
            { label: "Wash Care", value: "Machine Wash" }
        ],
        rating: 4.5,
        imageUrl: "images/wtops/p9.jpg"
    },
    {
        id: "s64",
        name: "Crew Neck Womens Cashmere Blue",
        price: "₹700",
        description: "FreshFits Crew Neck Womens Cashmere Blue.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Blue" },
            { label: "Wash Care", value: "Machine Wash" }
        ],
        rating: 4.5,
        imageUrl: "images/wtops/p10.jpg"
    },
    {
        id: "s65",
        name: "Tshirts Womens Snow White",
        price: "₹650",
        description: "FreshFits Tshirts Womens Snow White.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "White" },
            { label: "Wash Care", value: "Machine Wash" }
        ],
        rating: 4.5,
        imageUrl: "images/wtops/p11.jpg"
    },
    {
        id: "s66",
        name: "Womens-Top Crew Neck Snow White",
        price: "₹600",
        description: "Express yourself in this white graphic T-shirt. The crew neck and regular fit ensure comfort for casual wear. Let your personality shine through the eye-catching design of this versatile tee.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "White" },
            { label: "Wash Care", value: "Machine Wash" }
        ],
        rating: 4.5,
        imageUrl: "images/wtops/p12.jpg"
    },
    {
        id: "s67",
        name: "Women Boxy Crop Fit Crew Neck-Pastel Lilac",
        price: "₹550",
        description: "Women Boxy Crop Fit Crew Neck-Pastel Lilac.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Purple" },
            { label: "Wash Care", value: "Machine Wash" }
        ],
        rating: 4.5,
        imageUrl: "images/wtops/p13.jpg"
    },
    {
        id: "s68",
        name: "Womens-Top Polo Neck Powder Blue",
        price: "₹600",
        description: "Get ready for your workout in this light blue bodysuit. Featuring an abstract pattern and polo neckline, it's perfect for athletic activities. Stay comfortable and stylish during your fitness routine.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Blue" },
            { label: "Wash Care", value: "Machine Wash" }
        ],
        rating: 4.5,
        imageUrl: "images/wtops/p14.jpg"
    },
    {
        id: "s69",
        name: "Crew Neck Womens Ballerina",
        price: "₹650",
        description: "FreshFits Crew Neck Womens Ballerina.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Pink" },
            { label: "Wash Care", value: "Machine Wash" }
        ],
        rating: 4.5,
        imageUrl: "images/wtops/p15.jpg"
    },
    {
        id: "s70",
        name: "Crew Neck Womens Seafoam Green",
        price: "₹700",
        description: "Crew Neck Womens Seafoam Green.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Green" },
            { label: "Wash Care", value: "Machine Wash" }
        ],
        rating: 4.5,
        imageUrl: "images/wtops/p16.jpg"
    },
    {
        id: "s71",
        name: "Polo Neck Womens Alpine Green",
        price: "₹650",
        description: "Elevate your casual style with this dark green textured shirt. The spread collar adds a touch of sophistication, while the regular fit ensures comfort. Perfect for those who appreciate subtle details in their clothing.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Green" },
            { label: "Wash Care", value: "Machine Wash" }
        ],
        rating: 4.5,
        imageUrl: "images/wtops/p17.jpg"
    },
    {
        id: "s72",
        name: "Womens-Top Crew Neck Snow White",
        price: "₹700",
        description: "A timeless white t-shirt with a crew neckline, perfect for casual outings. Its regular fit and solid pattern make it a versatile staple that pairs well with any bottom.",
        sizes: ["S", "M", "L", "XL"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "White" },
            { label: "Wash Care", value: "Machine Wash" }
        ],
        rating: 4.5,
        imageUrl: "images/wtops/p18.jpg"
    },
    {
        id: "s73",
        name: "Womens-Bottom Denim Wine Cargo-Fit",
        price: "₹800",
        description: "Make a statement with these brown cargo jeans. The high-rise waist adds a trendy touch, while the solid pattern keeps them versatile. Perfect for casual outings with a unique twist.",
        sizes: ["28", "30", "32", "34","36"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Red" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Cargo fit" }
        ],
        rating: 4.5,
        imageUrl: "images/wjeans/j1.jpg"
    },
    {
        id: "s74",
        name: "Women Straight Fit Denim-Berry Blue Slim",
        price: "₹950",
        description: "WOMENS-BOTTOM.",
        sizes: ["28", "30", "32", "34","36"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Blue" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Slim Straight Fit" }
        ],
        rating: 4.5,
        imageUrl: "images/wjeans/j2.jpg"
    },
    {
        id: "s75",
        name: "Women Wide Flare Leg High Rise Fit Denim-Mid Blue Wide Leg-Fit",
        price: "₹900",
        description: "FreshFits Women Wide Flare Leg High Rise Fit Denim-Mid Blue",
        sizes: ["28", "30", "32", "34","36"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Blue" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Wide Leg Fit" }
        ],
        rating: 4.5,
        imageUrl: "images/wjeans/j3.jpg"
    },
    {
        id: "s76",
        name: "Denim Womens Raw Black Slim Straight-Fit",
        price: "₹850",
        description: "Flaunt your figure in this black mid-rise skinny jean. Its solid design is perfect for casual occasions, offering a sleek and flattering silhouette that goes with everything.",
        sizes: ["28", "30", "32", "34","36"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Black" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Slim Straight Fit" }
        ],
        rating: 4.5,
        imageUrl: "images/wjeans/j4.jpg"
    },
    {
        id: "s77",
        name: "Women Wide Flare Leg High Rise Fit Denim-Raw Indigo Wide Leg-Fit",
        price: "₹800",
        description: "Elevate your denim game with these high-rise indigo jeans. The wide-leg silhouette adds a trendy touch to your casual ensemble. These solid-colored jeans are a must-have for fashion-forward individuals looking to make a statement with their everyday wear.",
        sizes: ["28", "30", "32", "34","36"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Purple" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Wide Leg Fit" }
        ],
        rating: 4.5,
        imageUrl: "images/wjeans/j5.jpg"
    },
    {
        id: "s78",
        name: "Women Mid Rise Skinny Fit None Denim Port Wine Slim Straight-Fit",
        price: "₹950",
        description: "WOMENS-BOTTOM.",
        sizes: ["28", "30", "32", "34","36"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Red" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Slim Straight Fit" }
        ],
        rating: 4.5,
        imageUrl: "images/wjeans/j6.jpg"
    },
    {
        id: "s79",
        name: "Women Boot Cut Mid Rise Fit Denim-Grey Wash",
        price: "₹1000",
        description: "FreshFits Women Boot Cut Mid Rise Fit Denim-Grey Wash.",
        sizes: ["28", "30", "32", "34","36"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Grey" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Bootcut Fit" }
        ],
        rating: 4.5,
        imageUrl: "images/wjeans/j7.jpg"
    },
    {
        id: "s80",
        name: "Womens-Bottom Denim Rfd Moss Green",
        price: "₹800",
        description: "Olive jeans offer a unique twist on casual wear. These mid-rise, regular fit jeans feature a solid pattern for versatile styling.",
        sizes: ["28", "30", "32", "34","36"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Green" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Boyfriend Fit" }
        ],
        rating: 4.5,
        imageUrl: "images/wjeans/j8.jpg"
    },
    {
        id: "s81",
        name: "Women Boot Cut Fit Denim-White",
        price: "₹900",
        description: "FreshFits Women Boot Cut Fit Denim-White.",
        sizes: ["28", "30", "32", "34","36"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "White" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Bootcut Fit" }
        ],
        rating: 4.5,
        imageUrl: "images/wjeans/j9.jpg"
    },
    {
        id: "s82",
        name: "Women Slim Straight High Rise Fit Denim-Dark Indigo",
        price: "₹800",
        description: "Step up your denim game with these indigo jeans. Designed for casual wear, they feature a high-rise waist and regular fit. The solid pattern offers versatility, making them perfect for various outfit combinations.",
        sizes: ["28", "30", "32", "34","36"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Blue" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Slim Straight Fit" }
        ],
        rating: 4.5,
        imageUrl: "images/wjeans/j10.jpg"
    },
    {
        id: "s83",
        name: "Women Skinny Fit Denim-White",
        price: "₹950",
        description: "WOMENS-BOTTOM.",
        sizes: ["28", "30", "32", "34","36"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "White" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Slim Straight Fit" }
        ],
        rating: 4.5,
        imageUrl: "images/wjeans/j11.jpg"
    },
    {
        id: "s84",
        name: "Women High Rise Straight Fit None Denim Black",
        price: "₹900",
        description: "WOMENS-BOTTOM.",
        sizes: ["28", "30", "32", "34","36"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Black" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Slim Straight Fit" }
        ],
        rating: 4.5,
        imageUrl: "images/wjeans/j12.jpg"
    },
    {
        id: "s85",
        name: "Denim Womens Dark Indigo",
        price: "₹850",
        description: "Step into comfort with these blue high-rise wide-leg jeans. The solid pattern offers versatility for casual occasions. Embrace the trendy silhouette and create stylish, relaxed looks effortlessly.",
        sizes: ["28", "30", "32", "34","36"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Blue" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Wide Leg Fit" }
        ],
        rating: 4.5,
        imageUrl: "images/wjeans/j13.jpg"
    },
    {
        id: "s86",
        name: "Women Slim Straight High Rise Fit Denim-Black Wash",
        price: "₹800",
        description: "Upgrade your wardrobe with this black mid-rise jean. Designed for casual wear, its solid pattern and regular fit offer versatility and comfort. A timeless essential that pairs effortlessly with any top, ensuring you look great for any relaxed occasion.",
        sizes: ["28", "30", "32", "34","36"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Black" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Slim Straight Fit" }
        ],
        rating: 4.5,
        imageUrl: "images/wjeans/j14.jpg"
    },
    {
        id: "s87",
        name: "Track Womens Pastel Lilac",
        price: "₹950",
        description: "Stay stylish and comfortable in these lilac leggings. The geometric pattern adds interest to your casual look. With a mid-rise waist, these leggings are perfect for various activities.",
        sizes: ["28", "30", "32", "34","36"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Purple" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Skinny Fit" }
        ],
        rating: 4.5,
        imageUrl: "images/wjeans/j15.jpg"
    },
    {
        id: "s88",
        name: "Track Womens Sulpher Spring",
        price: "₹1000",
        description: "FreshFits Track Womens Sulpher Spring.",
        sizes: ["28", "30", "32", "34","36"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Yellow" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Regular Fit" }
        ],
        rating: 4.5,
        imageUrl: "images/wjeans/j16.jpg"
    },
    {
        id: "s89",
        name: "Track Womens Almond Milk",
        price: "₹800",
        description: "FreshFits Track Womens Almond Milk.",
        sizes: ["28", "30", "32", "34","36"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Cream" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Flared Fit" }
        ],
        rating: 4.5,
        imageUrl: "images/wjeans/j17.jpg"
    },
    {
        id: "s90",
        name: "Track Womens Seafoam Green",
        price: "₹900",
        description: "FreshFits Track Womens Seafoam Green.",
        sizes: ["28", "30", "32", "34","36"],
        specifications: [
            { label: "Material", value: "100% Cotton" },
            { label: "Color", value: "Green" },
            { label: "Wash Care", value: "Machine Wash" },
            { label: "Fit", value: "Bootcut Fit" }
        ],
        rating: 4.5,
        imageUrl: "images/wjeans/j18.jpg"
    },
    
];

// Function to get URL parameter by name
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Fetch the productId from the URL and find the corresponding product
const productId = getUrlParameter('productId');
const product = products.find(p => p.id === productId);

if (product) {
    // Dynamically generate the product detail content
    const container = document.getElementById("product-detail-container");
    container.innerHTML = `
        <div class="product-detail">
            <div class="product-image">
                <img src="${product.imageUrl}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h1>${product.name}</h1>
                <h3>MRP :</h3>
                <p class="price">${product.price}</p>
                <h3>Description :</h3>
                <p class="description">${product.description}</p>
                <!-- Adding a line before Specification option -->
                <hr class="divider">
                <h3>Specifications :</h3>
                <ul>
                    ${product.specifications.map(spec => `
                        <li>${spec.label}: ${spec.value}</li>
                    `).join('')}
                </ul>
                <!-- Adding a line before Size option -->
                <hr class="divider">
                <h3>Sizes :</h3>
                <div class="size-options">
                    ${product.sizes.map(size => `
                        <button class="size-option" onclick="selectSize(this)">${size}</button>
                    `).join('')}
                </div>
                <!-- Adding a line before Add to Cart button -->
                <hr class="divider">
                <div class="buttons-container">
                  <button onclick="addToCart('${product.id}')">Add to Cart</button>
                  <button class="wish" onclick="addToWishlist('${product.id}')">Add to Wishlist</button>
                </div>
            </div>
        </div>
    `;
}

// Function to select a size
function selectSize(button) {
    document.querySelectorAll(".size-option").forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");
}

// Cart Functionality - Store selected size in localStorage
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        // Get selected size
        const selectedSize = document.querySelector(".size-option.selected");

        if (!selectedSize) {
            alert("Please select a size before adding to cart!");
            return;
        }

        const size = selectedSize.innerText; // Get selected size text
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Check if the same product with the same size already exists in the cart
        const cartItem = cart.find(item => item.id === productId && item.size === size);

        if (!cartItem) {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                size: size, // Store selected size
                quantity: 1,
                imageUrl: product.imageUrl
            });
        } else {
            cartItem.quantity += 1;
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Product added to cart!");
    }
}



 // Function to add to wishlist
 function addToWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        // Get selected size
        const selectedSize = document.querySelector(".size-option.selected");

        if (!selectedSize) {
            alert("Please select a size before adding to wishlist!");
            return;
        }

        const size = selectedSize.innerText;
        const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

        // Check if product with the same size is already in wishlist
        const wishlistItem = wishlist.find(item => item.id === productId && item.size === size);

        if (!wishlistItem) {
            wishlist.push({
                id: product.id,
                name: product.name,
                price: product.price,
                size: size,
                imageUrl: product.imageUrl
            });

            localStorage.setItem("wishlist", JSON.stringify(wishlist));
            alert("Product added to wishlist!");
        } else {
            alert("This product is already in your wishlist!");
        }
    }
}



