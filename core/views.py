from django.shortcuts import redirect, render, HttpResponseRedirect
from core.models import FoodCard, Category, ProductsCart
from django.contrib.auth.models import User
# Create your views here.
def base(request):
    categories = Category.objects.all()
    foodCard = FoodCard.objects.all()
    context={'foodCards' :foodCard, 'categories' :categories}
    return render(request, 'index.html', context=context)
# def test(request, id):
# def pr_by_category(request, pk):
#     all_products = Product.objects.all()
#     products = Product.objects.filter(category=pk)
#     Categories = Category.objects.all().annotate(products_count = Count('product'))
#     return render(request, 'index.html', {'products':products, 'Categories':Categories, 'all_products':all_products})
#     categories = Category.objects.all()
#     category = Category.objects.get(id=id)
#     # category = FoodCard.objects.filter(id=id)
#     print(categories)
#     return render(request, 'index.html', {'categories' :categories, 'category' :category})

def product(request, id):
    foodcard =FoodCard.objects.get(id=id)
    one_type_categories = FoodCard.objects.all().filter(category=foodcard.category)
    return render(request, 'product.html', {'foodcard' :foodcard, 'one_type_categories' :one_type_categories})


cart_products=[]
# cart_session = []
res={}
def addCart(request, pk):
    cart_session = request.session.get('cart_session', [])
    count_of_product=len(cart_session)
    cart_products.append(pk)
    products_Cart = FoodCard.objects.filter(id__in=cart_products)
    print(products_Cart)
    # for i in products_Cart:
    #     p_name = i.name
    #     p_count = cart_products.count(i.id)
    #     p_price = i.price
    #     p_description = i.description
    #     total_sum = cart_products.count(i.id) * i.price 
    # context = {
    #     'p_name' :p_name,
    #     'p_count' :p_count,
    #     'p_price' :p_price,
    #     'p_description' :p_description,
    #     'total_sum' :total_sum,
    #     'products_Cart' :products_Cart
    # }
    for i in cart_products:
        if i in res:
            res[i] += 1
        else:
            res[i] = 1
    print(cart_products)
    product = FoodCard.objects.get(id=pk)
    product_cart = ProductsCart()
    # product_cart.user = User()
    product_cart.product = product.name
    product_cart.photo = product.image.url
    product_cart.price = product.price
    product_cart.count = res[pk]
    product_cart.total_sum = product_cart.price * product_cart.count
    product_cart.save()

    return HttpResponseRedirect('/')

def cart(request):
    cart_session = request.session.get('cart_session', [])
    count_of_product=len(cart_session)
    # cart_products.append(pk)
    products_Cart = FoodCard.objects.filter(id__in=cart_products)
    print(products_Cart)
    all_products_sum = 0
    for i in products_Cart:
        # p_name = i.name
        i.count = cart_products.count(i.id)
        i.sum = cart_products.count(i.id) * i.price
        # p_price = i.price
        # p_description = i.description
        # total_sum = p_count * p_price
        all_products_sum += i.sum 
        count_of_product += i.count

    context = {
        # 'p_name' :p_name,
        # 'p_count' :p_count,
        # 'p_price' :p_price,
        # 'p_description' :p_description,
        # 'total_sum' :total_sum,
        'products_Cart' :products_Cart,
        'all_products_sum' :all_products_sum,
        'count_of_product' :count_of_product
    }
    return render(request, 'cart.html', context=context)
def removeCart(request, id):
    cart_session = request.session.get('cart_session', [])
    carts=[]
    for i in cart_session:
        if id != i:
            carts.append(i)
    request.session['cart_session'] = carts
    return redirect('cart')

def about(request):
    return render(request, 'about.html')

def search(request):
    if request.method == 'POST':
        searched_product = request.POST.get('search').title()
        # product = FoodCard.objects.get(name=searched_product)
        products = FoodCard.objects.filter(name__contains=searched_product)

        print(product)
        # print(product.price)
        print(searched_product)
    return render(request, 'search.html', {'searched_product' :searched_product, 'products' :products })