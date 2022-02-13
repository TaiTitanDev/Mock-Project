<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class ShopItem extends Model
{
    use HasFactory;
    
    protected $table = 'shop_items';

    public static function create_default_item()
    {
        $item = new ShopItem();
        $item->name = 'default_name';
        $item->description = 'sample desciption';
        $item->quality_in_stock = 1;
        $item->price = 0.99;
        $item->expired_date = now();
        return $item;
    }

    public static function get_first_items($beginIndex, $count)
    {
        return DB::table('shop_items')->where('id', '>=', $beginIndex + 1)->limit($count)->get();
    }
}
