import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart, CartDocument } from './entities/cart.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart.name)
    private readonly cartModel: Model<CartDocument>,
  ) {}

  async create(createCartDto: CreateCartDto): Promise<Cart> {
    try {
      const createdCart = new this.cartModel(createCartDto);
      return await createdCart.save();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll() {
    try {
      const cart = await this.cartModel.find();
      if (!cart) {
        throw new NotFoundException(`Cart not found or empty !`);
      }
      return cart;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findOne(id: string): Promise<Cart> {
    try {
      const cart = await this.cartModel
        .findById(id)
        .populate('cart_image')
        .populate('cart_title')
        .exec();
      if (!cart) {
        throw new NotFoundException(`Cart with ID ${id} not found`);
      }
      return cart;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findByTitle(title: string): Promise<Cart | null> {
    return this.cartModel
      .findOne({ cart_title: new RegExp(title, 'i') })
      .exec();
  }

  async update(id: string, updateCartDto: UpdateCartDto): Promise<Cart> {
    try {
      const updatedCart = await this.cartModel
        .findByIdAndUpdate(id, updateCartDto, { new: true })
        .populate('cart_image')
        .exec();
      if (!updatedCart) {
        throw new NotFoundException(`Cart with ID ${id} not found`);
      }
      return updatedCart;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string): Promise<void> {
    try {
      const removedCart = await this.cartModel.findByIdAndDelete(id).exec();
      if (!removedCart) {
        throw new NotFoundException(`Cart with ID ${id} not found`);
      }
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
