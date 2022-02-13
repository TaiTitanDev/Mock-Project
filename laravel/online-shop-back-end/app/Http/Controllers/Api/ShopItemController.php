<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ShopItem;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ShopItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(ShopItem::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try
        {
            $it = new ShopItem();
            //$it = ShopItem::create_default_item();
            
            $it->name = $request->name;
            $it->description = $request->description;
            $it->expired_date = $request->expired_date;
            $it->quality_in_stock = $request->quality_in_stock;
            $it->price = $request->price;
            $it->item_categories_id = $request->item_categories_id;
            $it->save();
            return response()->json($it);

        }
        catch (Exception $e)
        {
            return response()->json($e, Response::HTTP_BAD_REQUEST);   
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ShopItem  $shopItem
     * @return \Illuminate\Http\Response
     */
    public function show(ShopItem $shopItem)
    {
        return $shopItem;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ShopItem  $shopItem
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ShopItem $shopItem)
    {
        return $shopItem->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ShopItem  $shopItem
     * @return \Illuminate\Http\Response
     */
    public function destroy(ShopItem $shopItem)
    {
        //
    }

    public function get(Request $request)
    {
        return response()->json(ShopItem::get_first_items($request->beginIndex, $request->count));
    }
}
